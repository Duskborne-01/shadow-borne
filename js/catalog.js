const libraryItems = [...searchAnime];

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
    searchAnime[0],
    searchAnime[1],
    searchAnime[4],
    searchAnime[5],
    searchAnime[7],
    searchAnime[10],
    searchAnime[12],
    searchAnime[13],
    searchAnime[14],
    searchAnime[15],
    searchAnime[16],
    searchAnime[18],
    searchAnime[20],
    searchAnime[21],
    searchAnime[22],
    searchAnime[26],
    searchAnime[27],
    searchAnime[28],
    searchAnime[30],
    searchAnime[32]
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
