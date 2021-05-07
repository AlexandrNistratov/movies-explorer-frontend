import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route exact path='/'>
                <Main />
                <Footer />
            </Route>
            <Route exact path='/movies'>
                <Movies />
                <Footer />
            </Route>
            <Route exact path='/saved-movies'>
                <SavedMovies />
                <Footer />
            </Route>
            <Route exact path='/profile'>
                <Profile />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
