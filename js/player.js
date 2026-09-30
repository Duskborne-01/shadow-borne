const id = new URLSearchParams(location.search).get('id') || 'jujutsu-kaisen';
const query = new URLSearchParams(location.search);
const anime = catalog[id] || {
    title: query.get('name') || 'ShadowBorne discovery',
    description: query.get('description') || 'This title is ready for your own poster and episode data.',
    poster: query.get('poster') || 'https://editors-cdn.template.net/a83f1a51-4020-435a-8abd-1531e3ea47ff.png',
    seasons: [
        {
            name: 'Season',
            episodes: [
                {
                    title: 'Episode',
                    video: 'https://cdn.pixabay.com/video/2024/02/25/201947-916877801_large.mp4'
                }
            ]
        }
    ]
};

const iframe = document.querySelector('#anime-iframe');
const storageKey = `shadowborne-progress-${id}`;

let currentSeason = 0;
let currentEpisode = 0;

const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');

document.querySelector('#player-poster').src = anime.poster;
document.querySelector('#player-poster').alt = anime.title;
document.querySelector('#player-title').textContent = anime.title;
document.querySelector('#player-description').textContent = anime.description;

const seasonSelect = document.querySelector('#season-select');

anime.seasons.forEach((season, index) => seasonSelect.add(new Option(season.name, index)));

function renderEpisodes() {
    const episodes = anime.seasons[currentSeason].episodes;
    const episodeGrid = document.querySelector('#episode-grid');
    
    episodeGrid.replaceChildren(...episodes.map((episode, index) => {
        const button = document.createElement('button');
        button.className = `episode-button${index === currentEpisode ? ' active' : ''}`;
        button.type = 'button';
        button.innerHTML = `${index + 1}. ${episode.title}<small>Episode ${index + 1}</small>`;
        button.addEventListener('click', () => loadEpisode(index));

        return button;
    }));
}

function loadEpisode(index) {
    currentEpisode = index;

    const episode = anime.seasons[currentSeason].episodes[index];

    if (iframe) {
        iframe.src = episode.video || '';
    }

    const emptyMsg = document.querySelector('#video-empty');

    if (emptyMsg) emptyMsg.hidden = Boolean(episode.video);

    renderEpisodes();

    localStorage.setItem(storageKey, JSON.stringify({ episode: currentEpisode }));
}

seasonSelect.addEventListener('change', () => {
    currentSeason = Number(seasonSelect.value);
    currentEpisode = 0; 

    loadEpisode(0);
});

loadEpisode(saved.episode || 0);
