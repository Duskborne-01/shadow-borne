const views = document.querySelectorAll('[data-auth-view]');
const forms = {
    login: document.querySelector('#login-form'),
    signup: document.querySelector('#signup-form'),
    forgot: document.querySelector('#forgot-form')
};

const message = document.querySelector('#auth-message');

function showView(view) {
    Object.entries(forms).forEach(([name, form]) => form.classList.toggle('active', name === view));
    views.forEach(button => button.classList.toggle('active', button.dataset.authView === view));
}

views.forEach(button => button.addEventListener('click', () => showView(button.dataset.authView)));
document.querySelector('#forgot-password').addEventListener('click', () => showView('forgot'));

async function sendAuth(path, payload) {
    if (window.location.protocol !== 'file:') {
        try {
            const response = await fetch(`http://localhost:3000/api/auth/${path}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (!response.ok) throw new Error(result.message || 'Authentication failed.');

            localStorage.setItem('shadowborne-token', result.token);

            return result;
        } catch (error) {
            if (error.name !== 'TypeError') throw error;
        }
    }

    return useLocalAccount(path, payload);
}

function useLocalAccount(path, payload) {
    const accountKey = 'shadowborne-local-account';
    const account = JSON.parse(localStorage.getItem(accountKey) || 'null');

    if (path === 'signup') {
        localStorage.setItem(accountKey, JSON.stringify({
            email: payload.email,
            phone: payload.phone,
            password: payload.password
        }));

        localStorage.setItem('shadowborne-token', 'local-demo-session');

        return { token: 'local-demo-session' };
    }

    if (path === 'login' && account && (account.email === payload.identity || account.phone === payload.identity) && account.password === payload.password) {
        localStorage.setItem('shadowborne-token', 'local-demo-session');

        return { token: 'local-demo-session' };
    }

    if (path === 'login') throw new Error('No matching account. Create an account first.');
}
forms.signup.addEventListener('submit', async event => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    if (data.get('password') !== data.get('confirmPassword')) {
        message.textContent = 'Passwords do not match.'; return;
    }

    try {
        await sendAuth('signup', {
            email: data.get('email'),
            phone: data.get('phone'),
            password: data.get('password')
        });

        message.textContent = 'Account created. Redirecting to login...';

        setTimeout(() => {
            window.location.href = './login.html?created=1';
        }, 700);
    } catch (error) {
        message.textContent = error.message;
    }
});

forms.login.addEventListener('submit', async event => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    try {
        await sendAuth('login', {
            identity: data.get('identity'),
            password: data.get('password')
        });

        message.textContent = 'Login successful. Redirecting home...';

        setTimeout(() => { window.location.href = './index.html'; }, 500);
    } catch (error) {
        message.textContent = error.message;
    }
});

forms.forgot.addEventListener('submit', event => {
    event.preventDefault();
    
    message.textContent = 'Recovery request captured. OTP delivery will be added next.';
});