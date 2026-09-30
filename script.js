const libraryAnime = [
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

const searchAnime = [
    {
        name: '86 EIGHTY-SIX',
        description: 'A divided nation sends forgotten teenagers to fight a war from the shadows.',
        poster: ''
    },

    {
        name: 'A Place Further Than the Universe',
        description: 'Four girls chase an impossible journey toward Antarctica and unexpected courage.',
        poster: ''
    },

    {
        name: 'Akudama Drive',
        description: 'A band of elite criminals turns a futuristic city into the stage for one impossible heist.',
        poster: ''
    },

    {
        name: 'Angel Beats!',
        description: 'Students in a strange afterlife confront unfinished regrets before moving on.',
        poster: ''
    },

    {
        name: 'Another',
        description: 'A quiet transfer student uncovers a deadly mystery surrounding his new classroom.',
        poster: ''
    },

    {
        name: 'Baccano!',
        description: 'Immortals, gangsters, and alchemists collide across a fractured tale of 1930s America.',
        poster: ''
    },

    {
        name: 'Barakamon',
        description: 'A young calligrapher discovers a warmer rhythm of life among island neighbors.',
        poster: ''
    },
    
    {
        name: 'Beastars',
        description: 'A gentle wolf navigates love, violence, and social divisions in an animal society.',
        poster: ''
    },

    {
        name: 'Black Clover',
        description: 'A magicless orphan refuses to surrender his dream of becoming the kingdom’s greatest mage.',
        poster: ''
    },

    {
        name: 'Blue Lock',
        description: 'Three hundred strikers compete in a ruthless experiment designed to create Japan’s ultimate forward.',
        poster: ''
    },

    {
        name: 'Bungo Stray Dogs',
        description: 'Gifted detectives and criminals wage a supernatural battle beneath Yokohama’s city lights.',
        poster: ''
    },

    {
        name: 'Carole & Tuesday',
        description: 'Two musicians from opposite worlds build a fragile friendship through songs on Mars.',
        poster: ''
    },

    {
        name: 'Charlotte',
        description: 'A teenager with a limited supernatural gift is drawn into protecting others like him.',
        poster: ''
    },

    {
        name: 'Clannad', 
        description: 'A troubled student finds belonging through friendships that slowly reshape his future.',
        poster: ''
    },

    {
        name: 'Cowboy Bebop', 
        description: 'A weary crew of bounty hunters crosses the solar system chasing targets and old ghosts.',
        poster: ''
    },

    {
        name: 'Cyberpunk: Edgerunners', 
        description: 'A reckless street kid becomes a mercenary in a city where humanity is always for sale.',
        poster: ''
    },

    {
        name: 'Death Parade', 
        description: 'Strangers play dangerous games while a mysterious bar weighs the value of their lives.',
        poster: ''
    },

    {
        name: 'Dr. Stone', 
        description: 'A scientific genius rebuilds civilization after humanity is turned to stone for millennia.',
        poster: ''
    },

    {
        name: 'Erased', 
        description: 'A struggling artist travels into his own childhood to prevent a tragedy that never left him.',
        poster: ''
    },

    {
        name: 'Fire Force', 
        description: 'Special firefighters battle spontaneous human combustion while investigating a hidden conspiracy.',
        poster: ''
    },

    {
        name: 'Frieren: Beyond Journey’s End', 
        description: 'An elven mage begins understanding mortal bonds long after a legendary quest ends.',
        poster: ''
    },

    {
        name: 'Golden Kamuy', 
        description: 'A veteran and an Ainu girl race across Hokkaido for a hidden fortune and its dangerous clues.',
        poster: ''
    },

    {
        name: 'Great Pretender', 
        description: 'A clever Japanese con artist is pulled into globe-spanning schemes by professionals.',
        poster: ''
    },

    {
        name: 'Haikyu!!', 
        description: 'A short but fearless volleyball player turns raw enthusiasm into a serious competitive weapon.',
        poster: ''
    },

    {
        name: 'Heavenly Delusion', 
        description: 'Two teenagers cross a ruined Japan while searching for a rumored safe haven.',
        poster: ''
    },

    {
        name: 'Hell’s Paradise', 
        description: 'A condemned shinobi searches a mysterious island for an elixir that could buy his freedom.',
        poster: ''
    },

    {
        name: 'Hellsing Ultimate', 
        description: 'A powerful vampire serves an organization that wages war against supernatural threats.',
        poster: ''
    },

    {
        name: 'Horimiya', 
        description: 'Two classmates discover the private sides of each other hidden behind their school reputations.',
        poster: ''
    },

    {
        name: 'Hunter x Hunter', 
        description: 'A young boy becomes an adventurer to find the legendary father who left him behind.',
        poster: ''
    },

    {
        name: 'Insomniacs After School', 
        description: 'Two sleepless students restore an abandoned observatory and find comfort in shared nights.',
        poster: ''
    },

    {
        name: 'JoJo’s Bizarre Adventure', 
        description: 'Generations of an extraordinary family face flamboyant enemies with supernatural abilities.',
        poster: ''
    },

    {
        name: 'Kaguya-sama: Love Is War', 
        description: 'Two brilliant students turn romance into a ridiculous battle of strategy and pride.',
        poster: ''
    },
    
    {
        name: 'Kill la Kill', 
        description: 'A fierce transfer student challenges an authoritarian academy armed with a living uniform.',
        poster: ''
    },

    {
        name: 'Land of the Lustrous', 
        description: 'A fragile gemstone warrior defends a beautiful world threatened by mysterious invaders.',
        poster: ''
    },

    {
        name: 'Link Click', 
        description: 'Two friends enter photographs to solve clients’ problems while risking their own futures.',
        poster: ''
    },

    {
        name: 'Made in Abyss', 
        description: 'A fearless girl descends into a beautiful abyss where every layer hides a cruel price.',
        poster: ''
    },

    {
        name: 'Mob Psycho 100', 
        description: 'A quiet psychic tries to grow as a person while keeping his overwhelming power in check.',
        poster: ''
    },

    {
        name: 'Monster', 
        description: 'A surgeon’s life unravels after saving a child who grows into a terrifying criminal.',
        poster: ''
    },

    {
        name: 'Mushoku Tensei: Jobless Reincarnation', 
        description: 'A second chance at life gives a withdrawn man the opportunity to master magic and change.',
        poster: ''
    },

    {
        name: 'My Hero Academia', 
        description: 'A powerless boy inherits a legendary ability and enters a school for aspiring heroes.',
        poster: ''
    },

    {
        name: 'Odd Taxi', 
        description: 'A reserved taxi driver becomes tangled in a missing-person case connecting the whole city.',
        poster: ''
    },

    {
        name: 'One Punch Man', 
        description: 'An unbeatable hero searches for a challenge while monsters and villains keep interrupting his routine.',
        poster: ''
    },

    {
        name: 'Orange', 
        description: 'A group of friends receives letters from the future asking them to save a classmate.',
        poster: ''
    },

    {
        name: 'Parasyte: The Maxim', 
        description: 'A teenager shares his body with a failed alien invader while fighting others of its kind.',
        poster: ''
    },

    {
        name: 'Ping Pong the Animation', 
        description: 'Two very different friends confront talent, pressure, and identity through table tennis.',
        poster: ''
    },

    {
        name: 'Pluto', 
        description: 'A robotic detective investigates a string of murders targeting the world’s most advanced machines.',
        poster: ''
    },

    {
        name: 'Psycho-Pass', 
        description: 'Inspectors police a controlled society where algorithms judge citizens before crimes happen.',
        poster: ''
    },

    {
        name: 'Ranking of Kings', 
        description: 'A deaf and underestimated prince begins a brave journey to prove what a king can be.',
        poster: ''
    },

    {
        name: 'Re:Zero - Starting Life in Another World',
        description: 'A young man discovers that death sends him back to a dangerous turning point.',
        poster: ''
    },

    {
        name: 'Samurai Champloo', 
        description: 'A waitress recruits two wildly different swordsmen for a journey across a stylized Edo Japan.',
        poster: ''
    },

    {
        name: 'Serial Experiments Lain', 
        description: 'A withdrawn girl is drawn into a network that blurs the boundary between reality and identity.',
        poster: ''
    },

    {
        name: 'Soul Eater',
        description: 'Students at a weapon-meister academy hunt corrupted souls to protect their strange world.',
        poster: ''
    }

].map((anime, index) => ({
    id: `discovery-${index + 1}`,
    name: anime.name,
    description: anime.description,
    poster: anime.poster
}));

const recommendations = [
    {
        logoSrc: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GRDV0019R-title_logo-en-us',
        src: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GRDV0019R-backdrop_wide',
        alt: 'Jujutsu Kaisen'
    },

    {
        logoSrc: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GY5P48XEY-title_logo-en-us',
        src: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GY5P48XEY-backdrop_wide',
        alt: 'Demon Slayer',
        logoStyle: 'left: 60px; top: 30px; max-width: 20%; max-height: 40%;'
    },

    {
        logoSrc: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/G24H1N3MP-title_logo-en-us',
        src: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/G24H1N3MP-backdrop_wide', 
        alt: 'Mushoku Tensei',
        logoStyle: 'left: 30px; top: 40px; max-width: 20%; max-height: 40%;'
    },

    {
        logoSrc: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/G4PH0WXVJ-title_logo-en-us',
        src: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/G4PH0WXVJ-backdrop_wide', 
        alt: 'SPY x FAMILY',
        logoStyle: 'left: 30px; top: 0; max-width: 20%; max-height: 40%;'
    },

    {
        logoSrc: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GDKHZEJ0K-title_logo-en-us',
        src: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GDKHZEJ0K-backdrop_wide', 
        alt: 'Solo Leveling' 
    },

    {
        logoSrc: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GQWH0M9N8-title_logo-en-us',
        src: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GQWH0M9N8-backdrop_wide', 
        alt: 'My Dress Up Darling' 
    },

    {
        logoSrc: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/G3KHEVDJ7-title_logo-en-us',
        src: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/G3KHEVDJ7-backdrop_wide', 
        alt: 'The Apothecary Diaries',
        logoStyle: 'left: 40px; top: 30px; max-width: 25%; max-height: 45%;'
    },

    {
        logoSrc: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GRVN8MNQY-title_logo-en-us',
        src: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GRVN8MNQY-backdrop_wide', 
        alt: 'Classroom Of The Elite' 
    }
];

const recommendationImages = document.querySelector('.recommendation-container .images');
const previousButton = document.querySelector('.left-btn');
const nextButton = document.querySelector('.right-btn');
const recommendationContainer = document.querySelector('.recommendation-container');
const recommendationDots = document.querySelector('.recommendation-dots');
const categoryButtons = document.querySelectorAll('[data-category]');
const posterGrid = document.querySelector('.posters');
const searchInput = document.querySelector('#search');
const searchResults = document.querySelector('.search-results');
const searchResultsGrid = document.querySelector('.search-results-grid');
const searchResultsCount = document.querySelector('.search-results-count');
const navSearchResults = document.querySelector('.nav-search-results');
const navSearchGrid = document.querySelector('.nav-search-grid');
const navSearchCount = document.querySelector('.nav-search-count');
const loginButton = document.querySelector('.login');
const accountButton = document.querySelector('.account');
let recommendationIndex = 0;
let slideTimer;
let slideAnimationTimer;

function createLibraryCard(anime) {
    const card = document.createElement('article');
    card.className = 'extra';
    card.dataset.categories = anime.categories.join(' ');
    card.dataset.name = anime.name;
    card.innerHTML = `
        <div class="hover">
            <img src="${anime.poster}" class="blur" title="${anime.name}" alt="${anime.name}">

            <div class="hover-text">${anime.name}</div>

            <button class="play-button" type="button" aria-label="Play ${anime.name}">
                <i class="ri-play-fill"></i>
            </button>
        </div>

        <div class="poster-title">${anime.name}</div>
    `;

    card.querySelector('.play-button').addEventListener('click', () => {
        window.location.href = `./html/player.html?id=${encodeURIComponent(anime.id)}`;
    });

    return card;
}

function renderLibrary() {
    posterGrid.replaceChildren(...libraryAnime.map(createLibraryCard));
}

function createSearchCard(anime) {
    const card = document.createElement('article');
    card.className = `search-card${anime.poster ? ' has-poster' : ' text-only'}`;
    card.innerHTML = `
        <img src="${anime.poster}" alt="${anime.name}">
        
        <div>
            <h3>${anime.name}</h3>
            
            <p>${anime.description}</p>
            
            <span>${anime.categories ? 'In your library' : 'Discovery catalog'}</span>
        </div>
    `;

    card.addEventListener('click', () => {
        const params = new URLSearchParams({  
            id: anime.id, 
            name: anime.name, 
            description: anime.description, 
            poster: anime.poster 
        });

        window.location.href = `./html/player.html?${params.toString()}`;
    });

    return card;
}

function renderNavSearchResults(query) {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
        navSearchResults.hidden = true;
        navSearchGrid.replaceChildren();

        return;
    }

    const matches = [...libraryAnime, ...searchAnime].filter((anime) => `${anime.name} ${anime.description}`.toLowerCase().includes(normalizedQuery)).slice(0, 8);

    navSearchResults.hidden = false;
    navSearchCount.textContent = `${matches.length} match${matches.length === 1 ? '' : 'es'}`;
    navSearchGrid.replaceChildren(...matches.map(createSearchCard));
    navSearchGrid.classList.remove('results-enter');

    requestAnimationFrame(() => navSearchGrid.classList.add('results-enter'));
}

function renderSearchResults(query) {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
        searchResults.hidden = true;
        searchResultsGrid.replaceChildren();

        return;
    }

    const matches = [...libraryAnime, ...searchAnime].filter((anime) => {
        const searchableText = `${anime.name} ${anime.description}`.toLowerCase();

        return searchableText.includes(normalizedQuery);
    });

    searchResults.hidden = false;
    searchResultsCount.textContent = `${matches.length} result${matches.length === 1 ? '' : 's'}`;
    searchResultsGrid.replaceChildren(...matches.map(createSearchCard));
    searchResultsGrid.classList.remove('results-enter');
    
    requestAnimationFrame(() => searchResultsGrid.classList.add('results-enter'));
}

function updateActiveDot() {
    recommendationDots.style.setProperty('--active-dot-index', recommendationIndex);
    recommendationDots.querySelectorAll('.recommendation-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === recommendationIndex);
        dot.setAttribute('aria-current', index === recommendationIndex ? 'true' : 'false');
    });
}

function showRecommendation(index, animate = true) {
    recommendationIndex = (index + recommendations.length) % recommendations.length;

    const recommendation = recommendations[recommendationIndex];
    
    clearTimeout(slideAnimationTimer);

    recommendationImages.style.position = 'relative';

    const renderImages = () => {
        let content = `<img src="${recommendation.src}" alt="${recommendation.alt}" style="width: 100%; height: 100%; object-fit: cover; display: block;">`;
        
        if (recommendation.logoSrc) {
            const customStyle = recommendation.logoStyle || 'left: 50px; top: 50px; max-width: 25%; max-height: 45%;';

            content += `<img src="${recommendation.logoSrc}" alt="${recommendation.alt} logo" style="
                position: absolute;
                width: auto;
                height: auto;
                object-fit: contain;
                z-index: 2;
                ${customStyle}
            ">`;
        }
        
        return content;
    };

    if (animate) {
        recommendationContainer.classList.add('is-sliding');

        slideAnimationTimer = setTimeout(() => {
            recommendationImages.innerHTML = renderImages();
            recommendationContainer.classList.remove('is-sliding');
        }, 450);
    } else {
        recommendationImages.innerHTML = renderImages();
    }

    updateActiveDot();
}

function resetSlideTimer() {
    clearInterval(slideTimer);

    slideTimer = setInterval(() => showRecommendation(recommendationIndex + 1), 5000);
}

recommendations.forEach((recommendation, index) => {
    const dot = document.createElement('button');
    dot.className = 'recommendation-dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Show ${recommendation.alt} banner ${index + 1}`);
    dot.addEventListener('click', () => {
        showRecommendation(index);
        resetSlideTimer();
    });

    recommendationDots.appendChild(dot);
});

nextButton.addEventListener('click', () => {
    showRecommendation(recommendationIndex + 1);

    resetSlideTimer();
});

previousButton.addEventListener('click', () => {
    showRecommendation(recommendationIndex - 1);

    resetSlideTimer();
});

categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedCategory = button.dataset.category;

        categoryButtons.forEach((categoryButton) => categoryButton.classList.toggle('active', categoryButton === button));

        posterGrid.querySelectorAll('.extra').forEach((posterCard) => {
            const categories = posterCard.dataset.categories.split(' ');

            posterCard.hidden = selectedCategory !== 'all' && !categories.includes(selectedCategory);
        });
    });
});

searchInput.addEventListener('input', (event) => {
    renderSearchResults(event.target.value);

    renderNavSearchResults(event.target.value);
});

loginButton.addEventListener('click', () => {
    if (localStorage.getItem('shadowborne-token')) {
        localStorage.removeItem('shadowborne-token');

        window.location.reload();
    } else {
        window.location.href = './html/login.html';
    }
});

accountButton.addEventListener('click', () => {
    if (!localStorage.getItem('shadowborne-token')) {
        window.location.href = './html/login.html';
        
        return;
    }
    window.location.href = './html/account.html';
});

function updateAuthButton() {
    const loggedIn = Boolean(localStorage.getItem('shadowborne-token'));
    loginButton.innerHTML = loggedIn
        ? '<i class="ri-logout-box-r-line"></i> Logout'
        : '<i class="ri-login-box-line"></i> Login';
    loginButton.setAttribute('aria-label', loggedIn ? 'Log out' : 'Log in');
}

renderLibrary();
updateAuthButton();
showRecommendation(0, false);
resetSlideTimer();