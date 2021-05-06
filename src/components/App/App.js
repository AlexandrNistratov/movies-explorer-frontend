import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/'>
                <Header />
                <Main />
            </Route>
            <Route exact path='/movies'>
                <Header />
                <Movies />
            </Route>
            <Route exact path='/saved-movies'>
                <Header />
                <SavedMovies />
            </Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
