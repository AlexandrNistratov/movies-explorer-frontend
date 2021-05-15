import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Login () {
    return (
        <>
            <Header />
            <section className='login'>
                <form className='register__form'>
                    <h1 className='profile__title register__title'>Рады видеть!</h1>
                    <label className='register__label'>E-mail</label>
                    <input id='profile__input' className='register__input' type="text" />
                    <label className='register__label'>Пароль</label>
                    <input id='profile__input' className='register__input' type="email" />
                    <button className='register__button login__button'>Войти</button>
                    <div className='login__subtitle'>
                        <p className='login__text'>Ещё не зарегистрированы?</p>
                        <Link className='login__link' to="/signup">Регистрация</Link>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Login;
