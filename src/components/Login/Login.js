import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

function Login () {
    return (
        <section className='login'>
            <h1 className='profile__title register__title'>Рады видеть!</h1>
            <form className='register__form'>
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
    );
}

export default Login;
