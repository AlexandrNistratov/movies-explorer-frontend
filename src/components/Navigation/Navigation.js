// Я знаю что так не правильно, но замучался уже сидеть над этим  Решил сдать без этого, а то времени мало

import React from 'react';
import {Link, useLocation } from 'react-router-dom';

import logo from '../../images/logo.svg';


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
                                <Link className='header__nav-link'  to="/">Регистрация</Link>
                                <button className='header__button'>
                                    <Link className='header__nav-button'  to="/">Войти</Link>
                                </button>
                            </nav>
                        </div>
                    </header>
                ) :
                (
                    <header className='header header__movies'>
                        <div className='header__content'>
                            <img className='header__logo' src={logo} alt="Логотип" />
                            <nav className='header__nav header__nav__movies'>
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
