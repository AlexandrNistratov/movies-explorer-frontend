import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/'>
                <Header />
                <Main />
                <Footer />
            </Route>
            <Route exact path='/movies'>
                <Header />
                <Movies />
                <Footer />
            </Route>
            <Route exact path='/saved-movies'>
                <Header />
                <SavedMovies />
                <Footer />
            </Route>
            <Route exact path='/profile'>
                <Header />
                <Profile />
            </Route>
            <Route exact path='/signup'>
                <Header />
                <Register />
            </Route>
            <Route exact path='/signin'>
                <Header />
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
