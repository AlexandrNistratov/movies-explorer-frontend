import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

import movieApi from '../../utils/MoviesApi';
import {loadMovies} from '../../utils/utils';
import {getMovieNumber} from '../../utils/utils';

function App() {
    // Карточки с сервера
    const [moviesCards, setMoviesCards] = React.useState([]);
    const [ countMovies, setCountMovies] = React.useState(getMovieNumber())

    React.useEffect(() => {
        movieApi.getAllMovies()
            .then(data => {
                console.log(data)
                setMoviesCards(data)
            })
            .catch(err => console.log(err))
    }, []);

    const handleClickMoreButton = () => {
        console.log("вызвалась")
        setCountMovies(countMovies + loadMovies());
        console.log('отработала')
    }

  return (
    <div className="App">
        <Switch>
            <Route exact path='/'>
                <Main />
            </Route>
            <Route exact path='/movies'>
                <Movies
                cards={moviesCards}
                loadMovies={handleClickMoreButton}
                />
            </Route>
            <Route exact path='/saved-movies'>
                <SavedMovies />
            </Route>
            <Route exact path='/profile'>
                <Profile />
            </Route>
            <Route exact path='/signup'>
                <Register />
            </Route>
            <Route exact path='/signin'>
                <Login />
            </Route>
            <Route exact path='/123'>
                <NotFound />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
