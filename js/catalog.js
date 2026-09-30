const libraryItems = [
    {
        id: 'jujutsu-kaisen',
        name: 'Jujutsu Kaisen',
        description: "A boy eats a cursed finger to save a classmate, absorbing the demon Ryomen Sukuna and entering the world of Jujutsu Sorcerers.",
        categories: [
            'Action', 
            'Supernatural',
            'Fantasy'
        ],

        poster: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/d128baf30c0638fafce3fd4e7c9ff37c.png'
    },
    
    {
        id: 'chainsaw-man',
        name: 'Chainsaw Man',
        description: "After betraying death by fusing with his pet devil Pochita, a young man fights fearsome devils as Chainsaw Man.",
        categories: [
            'Action', 
            'Comedy',
            'Fantasy',
            'Romance'
        ],

        poster: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/8d5ceb58d11dfc393aedf2841ce70916.png'
    },

    {
        id: 'demon-slayer',
        name: 'Demon Slayer',
        description: "Tanjiro sets out to become a Demon Slayer to avenge his family and cure his sister after she is transformed into a demon.",
        categories: [
            'Action', 
            'Adventure',
            'Fantasy'
        ],

        poster: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/0e9ea4d75ede3b8542aaa2848e04cccd.png'
    },

    {
        id: 'mushoku-tensei',
        name: 'Mushoku Tensei',
        description: "Reincarnated into a magical world as a newborn baby, a 34-year-old underachiever vows to live his new life to the absolute fullest.",
        categories: [
            'Isekai', 
            'Adventure', 
            'Drama', 
            'Harem',
            'Romance'
        ],

        poster: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/4b6a37e382ef65c121f10c4bc40c8b05.png'
    },

    {
        id: 'spy-x-family',
        name: 'SPY x FAMILY',
        description: "A master spy marries an assassin and adopts a telepathic orphan, hiding their true identities to build a fake family for world peace.",
        categories: [
            'Action',
            'Comedy',
            'Drama',
            'Slice Of Life',
            'Romance'
        ],

        poster: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/1d05d76580b92974b125044b3a0bbc8c.png'
    },

    {
        id: 'solo-leveling',
        name: 'Solo Leveling',
        description: "After miraculously surviving a deadly double dungeon, weak hunter Sung Jinwoo wakes up with a mysterious system that allows him to level up endlessly.",
        categories: [
            'Action',
            'Adventure',
            'Fantasy'
        ],

        poster: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/13ae20d389c66a1f0c8bf190a66ac9ad.png'
    },

    {
        id: 'my-dress-up-darling',
        name: 'My Dress Up Darling',
        description: "A shy doll-maker and a popular fashionista form an unlikely bond when she ropes him into her secret passion for cosplay.",
        categories: [
            'Romance',
            'Comedy',
            'Slice Of Life'
        ],

        poster: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/af51d08cadc3f965effd394d9d241b6b.jpg'
    },

    {
        id: 'the-rising-of-the-shield-hero',
        name: 'The Rising Of The Shield Hero',
        description: "Summoned to another world as a hero, Naofumi Iwatani is betrayed and left with only a shield, forcing him to fight for his survival and rebuild his reputation.",
        categories: [
            'Action',
            'Adventure',
            'Drama',
            'Fantasy'
        ],

        poster: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/3a6f652788a5a7055af12464bfae7117.png'
    },

    {
        id: 'the-apothecary-diaries',
        name: 'The Apothecary Diaries',
        description: "Kidnapped and forced to work as a lowly servant in the emperor's inner court, a young herbalist uses her sharp medical wits to solve imperial mysteries.",
        categories: [
            'Drama',
            'Mystery',
            'Sci-Fi',
            'Slice Of Life'
        ],

        poster: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/af8f1de4c1b2d5345294490a45fcb22d.jpg'
    },

    {
        id: 'classroom-of-the-elite',
        name: 'Classroom Of The Elite',
        description: "Students at a prestigious high school are given extreme freedom, but hidden behind the luxury is a ruthless merit-based point system where only the best survive.",
        categories: [
            'Mystery',
            'Psychological',
            'Drama',
            'Thriller'
        ],

        poster: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/3cfe30b74b8f536931370bcd441c1276.png'
    }
];

const genreNames = [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Fantasy',
    'Harem',
    'Isekai',
    'Romance',
    'Mystery',
    'Psychological',
    'School Life',
    'Sci-Fi',
    'Sports',
    'Thriller',
    'Supernatural',
    'Slice Of Life'
];

const movieItems = [
    {
        id: 'demon-slayer',
        name: 'Demon Slayer: Kimetsu No Yaiba Infinity Castle I',
        description: "Plunged into the demons' sprawling dimensional stronghold, Tanjiro and the Demon Slayer Corps begin their climactic final battle against Muzan Kibutsuji and his elite upper ranks.",
        genres: [
            'Action', 
            'Adventure',
            'Fantasy'
        ],

        poster: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/91008b564b6db1b77a63a61117597c29.png'
    },

    {
        id: 'chainsaw-man',
        name: 'Chainsaw Man - The Movie: Reze Arc',
        description: "Amid a brutal war between devils and hunters, Denji faces his deadliest battle yet when he meets a mysterious girl named Reze.",
        genres: [
            'Action', 
            'Comedy',
            'Fantasy',
            'Romance'
        ],

        poster: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/2ef947db8f1826666ee8c74d3ac2b74c.png'
    }
];

const trendingItems = [
    libraryItems[0],
    libraryItems[1],
    libraryItems[2],
    libraryItems[3],
    libraryItems[4],
    libraryItems[5],
    libraryItems[6],
    libraryItems[7],
    libraryItems[9],
];

function card(item) {
    return `
        <a class="catalog-card" href="./player.html?id=${encodeURIComponent(item.id)}&name=${encodeURIComponent(item.name)}&description=${encodeURIComponent(item.description)}&poster=${encodeURIComponent(item.poster)}">
            <img src="${item.poster}" alt="${item.name}">
            <div class="catalog-card-body">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
            </div>
        </a>
    `;
}

function renderCatalog(items, title) {
    const grid = document.querySelector('.catalog-grid');
    const count = document.querySelector('.catalog-count');
    document.querySelector('.catalog-title').textContent = title;

    const sorted = [...items].sort((a, b) => a.name.localeCompare(b.name));

    count.textContent = `${sorted.length} titles`;

    grid.innerHTML = sorted.map(card).join('');
}

const page = document.body.dataset.page;

function renderFooter() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
        <div class="footer-inner">
            <a class="footer-brand" href="../index.html">
                <span class="brand-mark">S</span>
                <span>
                    Shadow
                    <span>Borne</span>
                </span>
            </a>
        
            <nav class="footer-nav" aria-label="Footer navigation">
        
            <a href="./browse.html">Browse</a>
            <a href="./genres.html">Genres</a>
            <a href="./movies.html">Movies</a>
            <a href="./trending.html">Trending</a>
            <a href="./account.html">Account</a>
        </nav>
    
        <p class="footer-copy">&copy; 2026 ShadowBorne. Curated for late-night stories.</p>
    </div>`;

    document.body.appendChild(footer);
}

if (page === 'browse') renderCatalog(libraryItems, 'Browse anime');
if (page === 'movies') renderCatalog(movieItems, 'Anime movies');
if (page === 'trending') renderCatalog(trendingItems, 'Trending now');
if (page === 'genre') {
    const genre = new URLSearchParams(location.search).get('name') || 'Action';
    renderCatalog(libraryItems.filter(item => item.genres.includes(genre)), `${genre} anime`);
}

if (page === 'genres') {
    const grid = document.querySelector('.genre-grid');
    grid.innerHTML = genreNames.map(genre => `
        <a class="genre-link" href="./genre.html?name=${encodeURIComponent(genre)}">
            <strong>${genre}</strong><span>Explore ${genre.toLowerCase()} titles</span>
        </a>
    `).join('');

    document.querySelector('.catalog-title').textContent = 'Genres'; document.querySelector('.catalog-count').textContent = `${genreNames.length} genres`;
}

if (page === 'account') {
    const account = JSON.parse(localStorage.getItem('shadowborne-local-account') || '{}');
    const profile = JSON.parse(localStorage.getItem('shadowborne-profile') || '{}');

    document.querySelector('.account-email').value = account.email || '';
    document.querySelector('.account-phone').value = account.phone || '';
    document.querySelector('#profile-username').value = profile.username || '';
    document.querySelector('#profile-full-name').value = profile.fullName || '';
    document.querySelector('#profile-dob').value = profile.dob || '';
    document.querySelector('#profile-heading').textContent = profile.username || profile.fullName || 'Your profile';
    document.querySelector('.account-status').textContent = localStorage.getItem('shadowborne-token') ? 'Active local session' : 'Guest account';

    if (profile.avatar) document.querySelector('#profile-avatar').innerHTML = `<img src="${profile.avatar}" alt="Profile picture">`;

    document.querySelector('#avatar-input').addEventListener('change', event => {
        const file = event.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.addEventListener('load', () => { document.querySelector('#profile-avatar').innerHTML = `<img src="${reader.result}" alt="Profile picture">`; localStorage.setItem('shadowborne-profile', JSON.stringify({ ...profile, avatar: reader.result })); });
        reader.readAsDataURL(file);
    });

    document.querySelector('#profile-form').addEventListener('submit', event => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const nextProfile = {
            ...profile,

            username: data.get('username'),
            fullName: data.get('fullName'),
            dob: data.get('dob')
        };

        localStorage.setItem('shadowborne-profile', JSON.stringify(nextProfile));

        document.querySelector('#profile-heading').textContent = nextProfile.username || nextProfile.fullName || 'Your profile';
        document.querySelector('#profile-message').textContent = 'Saved';
    });

    document.querySelector('#logout-account').addEventListener('click', () => { localStorage.removeItem('shadowborne-token'); window.location.href = '../index.html'; });
}

renderFooter();
