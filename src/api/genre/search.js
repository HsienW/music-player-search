import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

const getSearch = (key) => {
    spotify.setAccessToken(JSON.parse(sessionStorage.getItem('user-token')));
    return spotify.search(key, ['album', 'artist', 'playlist', 'track']);
};

export {
    getSearch,
};



