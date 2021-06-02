import { base_url } from './utils';

class MainApi {
    constructor(options) {
        this._headers = options._headers;
    }

    checkResponse (res) {
        if (res.ok) {
           return res.json()
        }
        return Promise.reject('Ошибка на сервере')
    }

    getToken() {
        const token = localStorage.getItem('jwt');
        return {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        };
    }

    getUserInfo (token) {
        return fetch(`${base_url}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then(this.checkResponse);
    }

    register (name, email, password) {
        console.log(name, email)
        return fetch(`${base_url}/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ name, email, password })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
    }

    authorize (email, password) {
        return fetch(`${base_url}/signin`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({email, password})
        })
            .then(this.checkResponse)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('jwt', data.token);
                    return data;
                }
            })
    }

    getUserInfo() {
        return fetch(`${base_url}/users/me`, {
            method: 'GET',
            headers: this.getToken(),
            credentials: 'include',
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return this.checkResponse;
        });
    }

    addUserInfo(data) {
        return fetch(`${base_url}/users/me`, {
            method: 'PATCH',
            headers: this.getToken(),
            credentials: 'include',
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            }),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return this.checkResponse;
        });
    }

    addNewCards(movie) {
        return fetch(`${base_url}/movies`, {
            method: 'POST',
            headers: this.getToken(),
            credentials: 'include',
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailer: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN
            }),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return this.checkResponse;
        });
    }

    deleteCards(movieId) {
        return fetch(`${base_url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this.getToken(),
            credentials: 'include',
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return this.checkResponse;
        });
    }

    getSavedMovies () {
        return fetch(`${base_url}/movies`, {
            method: "GET",
            headers: this.getToken(),
        }).then(this.checkResponse);
    }
}

const mainApi = new MainApi({
    url: base_url
})

export default mainApi;
