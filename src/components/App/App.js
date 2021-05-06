import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';

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
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
