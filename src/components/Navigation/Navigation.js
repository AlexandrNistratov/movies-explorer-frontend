// Я знаю что так не правильно, но замучался уже сидеть над этим  Решил сдать без этого, а то времени мало

import React from 'react';
import {Link, Route, Switch } from 'react-router-dom';

import logo from '../../images/logo.svg';


function Navigation() {
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
                        <nav className='header__nav header__nav__movies'>
                            <ul className='header__links'>
                                <Link className='header__nav-link'  to="/">Фильмы</Link>
                                <Link className='header__nav-link header__nav-link-normal'  to="/saved-movies">Сохранённые фильмы</Link>
                            </ul>
                            <button className='header__button header__button-grey'>
                                <Link className='header__nav-button header__nav-button-grey'  to="/">Аккаунт</Link>
                            </button>
                        </nav>
                    </div>
                </header>
            </Route>
            <Route exact path='/saved-movies'>
                <header className='header header__movies'>
                    <div className='header__content'>
                        <img className='header__logo' src={logo} alt="Логотип" />
                        <nav className='header__nav header__nav__movies'>
                            <ul className='header__links'>
                                <Link className='header__nav-link'  to="/">Фильмы</Link>
                                <Link className='header__nav-link header__nav-link-normal'  to="/saved-movies">Сохранённые фильмы</Link>
                            </ul>
                            <button className='header__button header__button-grey'>
                                <Link className='header__nav-button header__nav-button-grey'  to="/">Аккаунт</Link>
                            </button>
                        </nav>
                    </div>
                </header>
            </Route>
            <Route exact path='/profile'>
                <header className='header header__movies'>
                    <div className='header__content'>
                        <img className='header__logo' src={logo} alt="Логотип" />
                        <nav className='header__nav header__nav__movies'>
                            <ul className='header__links'>
                                <Link className='header__nav-link'  to="/">Фильмы</Link>
                                <Link className='header__nav-link header__nav-link-normal'  to="/saved-movies">Сохранённые фильмы</Link>
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

export default Navigation;
