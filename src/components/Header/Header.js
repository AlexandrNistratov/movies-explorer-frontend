import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

function Header() {
    return (
        <Switch>
            <Route exact path='/'>
                <header className='header'>
                    <div className='header__content'>
                        <img className='header__logo' src={logo} alt="Логотип" />
                        <nav className='header__nav'>
                            <Link className='header__nav-link'  to="/">Регистрация</Link>
                            <button className='header__button'>
                                <Link className='header__nav-button'  to="/">Войти</Link>
                            </button>
                        </nav>
                    </div>
                </header>
            </Route>
            <Route exact path='/movies'>
                <header className='header header__movies'>
                    <div className='header__content'>
                        <img className='header__logo' src={logo} alt="Логотип" />
                        <nav className='header__nav'>
                            <ul className='header__links'>
                                <Link className='header__nav-link'  to="/">Фильмы</Link>
                                <Link className='header__nav-link header__nav-link-normal'  to="/">Сохранённые фильмы</Link>
                            </ul>
                            <button className='header__button header__button-grey'>
                                <Link className='header__nav-button header__nav-button-grey'  to="/">Аккаунт</Link>
                            </button>
                        </nav>
                    </div>
                </header>
            </Route>
        </Switch>
    );
}

export default Header;











        {/*<header className='header'>*/}
        {/*    <img className='header__logo' src={logo} alt="Логотип" />*/}
        {/*        <Switch>*/}
        {/*            <Route exact path='/'>*/}
        {/*                <nav className='header__nav'>*/}
        {/*                    <Link className='header__nav-signup'  to="/">Регистрация</Link>*/}
        {/*                    <Link className='header__nav-signin'  to="/">Войти</Link>*/}
        {/*                </nav>*/}
        {/*            </Route>*/}
        {/*            <Route exact path='/movies'>*/}
        {/*                <nav className='header__nav'>*/}
        {/*                    <ul className='header__nav-movies'>*/}
        {/*                        <Link className='header__nav-signup'  to="/">Фильмы</Link>*/}
        {/*                        <Link className='header__nav-signup'  to="/">Сохранённые фильмы</Link>*/}
        {/*                        <Link className='header__nav-signin'  to="/">Аккаунт</Link>*/}
        {/*                    </ul>*/}

        {/*                </nav>*/}
        {/*            </Route>*/}
        {/*        </Switch>*/}
        {/*</header>*/}

