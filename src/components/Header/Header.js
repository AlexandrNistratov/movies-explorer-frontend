import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from '../../images/logo.svg';

function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt="Логотип" />
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <nav className='header__nav'>
                            {/*<link className='header__nav-signup' to='*'/>Регистрация<Link />*/}
                            <a className='header__nav-signup' href="">Регистрация</a>
                            {/*<link className='header__nav-signin' to='*'/>Войти<Link />*/}
                            <a className='header__nav-signin' href="">Войти</a>
                        </nav>
                    </Route>
                </Switch>
            </BrowserRouter>
        </header>
    );
}

export default Header;
