import React from 'react';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import mainApi from '../../utils/MainApi';
import movieApi from '../../utils/MoviesApi';
import { handleCheckSaved, handleError } from '../../utils/utils';

function App() {
    const history = useHistory();
    const [ userData, setUserData ] = React.useState({
        name: '',
        email: '',
        password: ''
    })
    const [currentUser, setCurrentUser] = React.useState({});
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [ moviesCards, setMoviesCards ] = React.useState([]);
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [hasMoreButton, setHasMoreButton] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);


    React.useEffect(() => {
        tokenCheck();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    React.useEffect(() => {
        if (!loggedIn) return;
        mainApi.getUserInfo()
            .then(res => {
                setCurrentUser(res)
            }).catch((err) => alert(err));
    }, [loggedIn])

    function tokenCheck () {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            mainApi.getUserInfo(jwt)
                .then((res) => {
                    const userData = {
                        name: res.name,
                        email: res.email,
                        password: res.password,
                    }
                    setUserData(userData);
                    setLoggedIn(true);
                    history.push('/movies');
                }).catch(err => console.log(err))
        }
    }

    function handleLogin(email, password) {
        mainApi.authorize(email, password)
            .then((data) => {
                console.log(data)
                if (data.token) {
                    localStorage.setItem('jwt', data.token);
                    setLoggedIn(true);
                    history.push('/movies');
                }
            }).catch(err => {
            console.log(err);;
        })
    }

    function handleLogout() {
        localStorage.removeItem('jwt');
        setSavedMovies([]);
        setUserData({
            name: '',
            email: '',
            password: ''
        });
        setCurrentUser({});
        setLoggedIn(false);
        history.push('/')

    }

    function handleRegister (name, email, password) {
        mainApi.register(name, email, password)
            .then((res) => {
                if (res !== undefined && res._id) {
                    setUserData({
                        email: res.email,
                        name: res.name
                    })
                    setTimeout(() => {
                        handleLogin(email, password);
                    }, 300);
                }
            }).catch(err => {
            console.log(err);
        })
    }

    function handleUpdateUser(data) {
        mainApi.addUserInfo(data).then((res) => {
            setCurrentUser(res);
        }).catch((err) => console.log(err));
    }

    const  handleSaveMovies = (movie) => {
        mainApi.addNewCards(movie)
            .then((newCard) => {
                console.log(newCard)
                setSavedMovies([newCard, ...savedMovies]);
            }).catch((err) => console.log(err));
    }

    const handleDeleteMovies = (movie) => {
        const movieId = movie.id || movie.movieId;
        const userMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movieId);

        mainApi.deleteCards(userMovie._id)
            .then(() => {
                const filterCard = savedMovies.filter((item) => item._id !== userMovie._id);
                setSavedMovies(filterCard);

            })
    }

    const handleClickButton = (movie) => {
        const isSaved = handleCheckSaved(movie, savedMovies);
        if (movie.id === savedMovies.id || isSaved) {
            return handleDeleteMovies(movie)
        }
        return  handleSaveMovies(movie);
    }


    React.useEffect(() => {
        if (!loggedIn) return;
            mainApi.getSavedMovies()
            .then(data => {
                setSavedMovies(data);

            })
            .catch(err => console.log(err))
    }, [loggedIn]);

    React.useEffect(() => {
        setIsLoading(true)
        movieApi.getAllMovies()
            .then(data => {
                setMoviesCards(data);
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }, []);


  return (
      <CurrentUserContext.Provider value={currentUser}>
          <div className="App">
              <Switch>
                  <Route exact path='/'>
                      <Main />
                  </Route>
                      <ProtectedRoute
                          component={Movies}
                          path='/movies'
                          loggedIn={loggedIn}
                          isLoading={isLoading}
                          setIsLoading={setIsLoading}
                          moviesCards={moviesCards}
                          moviesSaved={savedMovies}
                          handleClickButton={handleClickButton}
                          hasMoreButton={setHasMoreButton}
                      />
                  <ProtectedRoute
                      component={SavedMovies}
                      path='/saved-movies'
                      loggedIn={loggedIn}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                      savedMovies={savedMovies}
                      moviesSaved={savedMovies}
                      hasMoreButton={hasMoreButton}
                      handleClickButton={handleClickButton}
                  />
                  <ProtectedRoute
                      component={Profile}
                      path='/profile'
                      loggedIn={loggedIn}
                      handleLogout={handleLogout}
                      onUpdateUser={handleUpdateUser}/>
                  />
                  <Route exact path='/signup'>
                      <Register
                          handleRegister={handleRegister}
                      />
                  </Route>
                  <Route exact path='/signin'>
                      <Login
                          handleLogin={handleLogin}
                      />
                  </Route>
                  <Route exact path='*'>
                      <NotFound/>
                  </Route>
              </Switch>
          </div>
      </CurrentUserContext.Provider>

  );
}

export default App;
