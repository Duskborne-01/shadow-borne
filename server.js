import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET;

if (!process.env.MONGODB_URI || !jwtSecret) {
    throw new Error('MONGODB_URI and JWT_SECRET are required. Copy .env.example to .env.');
}

app.use(cors());
app.use(express.json());

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        sparse: true
    },

    phone: {
        type: String,
        trim: true,
        unique: true,
        sparse: true
    },

    passwordHash: {
        type: String,
        required: true
    },

    profile: {
        username: String,
        fullName: String,
        picture: String
    },

    watchHistory: {
        type: Map,
        of: mongoose.Schema.Types.Mixed,
        default: {}
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

function issueToken(user) {
    return jwt.sign(
        {
            userId: user.id
        },

        jwtSecret,

        {
            expiresIn: '7d'
        }
    );
}

async function requireUser(request, response, next) {
    try {
        const token = request.headers.authorization?.replace('Bearer ', '');
        const payload = jwt.verify(token, jwtSecret);

        request.user = await User.findById(payload.userId);

        if (!request.user) return response.status(401).json({
            message: 'Account not found.'
        });

        next();
    } catch {
        response.status(401).json({
            message: 'Please sign in again.'
        });
    }
}

app.post('/api/auth/signup', async (request, response) => {
    try {
        const {
            email,
            phone,
            password
        } = request.body;

        if (!email || !phone || !password || password.length < 8) return response.status(400).json({
            message: 'Email, phone, and an eight-character password are required.'
        });

        const passwordHash = await bcrypt.hash(password, 12);
        const user = await User.create({
            email,
            phone,
            passwordHash
        });

        response.status(201).json({
            token: issueToken(user),
            profile: user.profile
        });
    } catch (error) {
        response.status(409).json({
            message: error.code === 11000 ? 'That email or phone is already registered.' : 'Could not create account.'
        });
    }
});

app.post('/api/auth/login', async (request, response) => {
    const {
        identity,
        password
    } = request.body;

    const user = await User.findOne({
        $or: [
            {
                email: identity?.toLowerCase()
            },

            {
                phone: identity
            }
        ]
    });

    if (!user || !(await bcrypt.compare(password || '', user.passwordHash))) return response.status(401).json({
        message: 'Invalid login details.'
    });

    response.json({
        token: issueToken(user),
        profile: user.profile
    });
});

app.get('/api/profile', requireUser, (request, response) => response.json({
    profile: request.user.profile,
    email: request.user.email,
    phone: request.user.phone
}));

app.patch('/api/profile', requireUser, async (request, response) => {
    request.user.profile = {
        ...request.user.profile.toObject?.(),
        ...request.body
    };

    await request.user.save();

    response.json({
        profile: request.user.profile
    });
});
app.put('/api/watch-progress/:animeId', requireUser, async (request, response) => {
    request.user.watchHistory.set(request.params.animeId, request.body);
    await request.user.save();
    response.json({
        saved: true
    });
});

app.get('/api/watch-progress/:animeId', requireUser, (request, response) => response.json(request.user.watchHistory.get(request.params.animeId) || null));

mongoose.connect(process.env.MONGODB_URI).then(() => app.listen(port, () => console.log(`ShadowBorne API listening on ${port}`)));