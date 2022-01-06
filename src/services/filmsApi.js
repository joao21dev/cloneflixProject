import api from "./api";

const apiKey = 'api_key=4cb2bf129624fa7e43e37f2e7cb3a1a3';
const language = 'language=pt-BR';

export const GetFilmsTrending = (page) => {
    const url = `trending/movie/week?${apiKey}&${language}&page=${page}`;
    return api.get(url)
}

export const GetFilmsNowPlaying = (page) => {
    const url = `movie/now_playing?${apiKey}&${language}&page=${page}`;
    return api.get(url)
}

export const GetFilmsLatest = (page) => {
    const url = `movie/top_rated?${apiKey}&${language}&page=${page}`;
    return api.get(url)
}

export const GetFilmsUpComing = (page) => {
    const url = `movie/upcoming?${apiKey}&${language}&page=${page}`;
    return api.get(url)
}

export const GetGenres = () => {
    const url = `genre/movie/list?${apiKey}&${language}`;
    return api.get(url)
}

export const GetFilmsDiscover = (page) => {
    const url = `discover/movie?${apiKey}&${language}&page=${page}`;
    return api.get(url)
}