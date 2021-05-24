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

import mainApi from '../../utils/MainApi';

function App() {
    const history = useHistory();
    const [ userData, setUserData ] = React.useState({
        name: '',
        email: '',
        password: ''
    })
    const [currentUser, setCurrentUser] = React.useState('');
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [hasMoreButton, setHasMoreButton] = React.useState(false);

    React.useEffect(() => {
        tokenCheck();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps


    function tokenCheck () {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            mainApi.getContent(jwt)
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
                if (data.token) {
                    console.log(data.token)
                    localStorage.setItem('jwt', data.token);
                    setLoggedIn(true);
                    history.push('/movies');
                }
            }).catch(err => console.log(err))
    }

    function handleLogout() {
        localStorage.removeItem('jwt');
        setLoggedIn(false);
        history.push('/')

    }

    function handleRegister (name, email, password) {
        mainApi.register(name, email, password)
            .then((res) => {
                if (res !== undefined && res._id) {
                    setUserData({
                        email: res.email
                    })
                    setTimeout(() => {
                        handleLogin(email, password);
                    }, 300);
                }
            }).catch(err => console.log(err))
    }

    function handleUpdateUser(data) {
        mainApi.addUserInfo(data).then((res) => {
            setCurrentUser(res);
        }).catch((err) => alert(err));
    }

    const  handleSaveMovies = (movie) => {
        mainApi.addNewCards(movie)
            .then((newCard) => {
                setSavedMovies([newCard, ...savedMovies]);
            }).catch((err) => alert(err));
    }

    const handleDeleteMovies = (movie) => {
        mainApi.deleteCards(movie._id)
            .then(() => {
                const filterCard = savedMovies.filter((item) => item._id !== movie._id)
                setSavedMovies(filterCard)
            })
    }

    const handleClickSaveButton = (movie) => {
        if (!movie._id) {
           return  handleSaveMovies(movie);
        }
        return handleDeleteMovies(movie)
    }

    React.useEffect(() => {
        mainApi.getSavedMovies()
            .then(data => {
                console.log(data)
                setSavedMovies(data);

            })
            .catch(err => console.log(err))
    }, []);


  return (
      <CurrentUserContext.Provider value={currentUser}>
          <div className="App">
              <Switch>
                  <Route exact path='/'>
                      <Main />
                  </Route>
                  <Route exact path='/movies'>
                      <Movies
                          loggedIn={loggedIn}
                          handleClickSaveButton={handleClickSaveButton}
                          hasMoreButton={setHasMoreButton} />
                  </Route>
                  <Route exact path='/saved-movies'>
                      <SavedMovies
                          loggedIn={loggedIn}
                          savedMovies={savedMovies}
                          hasMoreButton={setHasMoreButton}
                          handleClickSaveButton={handleClickSaveButton} />
                  </Route>
                  <Route exact path='/profile'>
                      <Profile
                          handleLogout={handleLogout}
                          userData={userData}
                          onUpdateUser={handleUpdateUser}/>
                  </Route>
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
                  <Route exact path='/123'>
                      <NotFound />
                  </Route>
              </Switch>
          </div>
      </CurrentUserContext.Provider>

  );
}

export default App;
