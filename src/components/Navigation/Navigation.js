import React from 'react';
import {Link, useLocation } from 'react-router-dom';

import logo from '../../images/logo.svg';
import burgerImg from '../../images/burger.svg';


function Navigation() {
    const location = useLocation();
    const isMainPage = location.pathname === '/';
    return (
        <>
            {isMainPage
                ?
                (
                    <header className='header'>
                        <div className='header__content'>
                            <img className='header__logo' src={logo} alt="Логотип" />
                            <nav className='header__nav'>
                                <Link className='header__nav-link'  to="/signup">Регистрация</Link>
                                <button className='header__button'>
                                    <Link className='header__nav-button'  to="/signin">Войти</Link>
                                </button>
                            </nav>
                        </div>
                    </header>
                ) :
                (
                    <header className='header header__movies'>
                        <div className='header__content header__content-movies'>
                            <img className='header__logo' src={logo} alt="Логотип" />
                            <img className='burger__img' src={burgerImg} alt="Меню бургер"/>
                            <div className='burger burger__active'>
                                <div className='burger__menu'>
                                    <nav className='header__nav burger__nav'>
                                        <button className='burger__close'></button>
                                        <div className='burger__links'>
                                            <Link className='header__nav-link burger__link'  to="/">Главная</Link>
                                            <Link className='header__nav-link burger__link'  to="/movies">Фильмы</Link>
                                            <Link className='header__nav-link burger__link'  to="/saved-movies">Сохраненные фильмы</Link>
                                        </div>
                                        <button className='header__button header__button-grey burger__button'>
                                            <Link className='header__nav-button header__nav-button-grey'  to="/profile">Аккаунт</Link>
                                        </button>
                                    </nav>
                                </div>
                            </div>
                            <nav className='header__nav header__nav_movies'>
                                <ul className='header__links'>
                                    <Link className='header__nav-link'  to="/movies">Фильмы</Link>
                                    <Link className='header__nav-link header__nav-link-normal'  to="/saved-movies">Сохранённые фильмы</Link>
                                </ul>
                                <button className='header__button header__button-grey'>
                                    <Link className='header__nav-button header__nav-button-grey'  to="/profile">Аккаунт</Link>
                                </button>
                            </nav>
                        </div>

                    </header>
                )
            }
        </>
    );
}

export default Navigation;
