class MovieApi {
    constructor(options) {
        this._url = options.baseURL;
        this._headers = options.headers;
    }

    getAllMovies () {
        return fetch(`${this._url}`, {
            headers: this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
}

export const movieApi = new MovieApi({
    baseURL: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default movieApi;
