import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Register () {
    return(
        <>
            <Header />
            <section className='register'>
                <form className='register__form'>
                    <h1 className='profile__title register__title'>Добро пожаловать!</h1>
                    <label className='register__label'>Имя</label>
                    <input id="user-name"
                           className='register__input'
                           type="name" />
                    <span className="error" id="user-name-error"></span>
                    <label className='register__label'>E-mail</label>
                    <input id="user-email"
                           className='register__input'
                           type="email" />
                    <span className="error" id="user-email-error"></span>
                    <label className='register__label'>Пароль</label>
                    <input id="user-password"
                           className='register__input'
                           type="password" />
                    <span className="error" id="user-password-error"></span>
                    <button className='register__button'>Зарегистрироваться</button>
                    <div className='login__subtitle'>
                        <p className='login__text'>Уже зарегистрированы?</p>
                        <Link className='login__link' to="/signin">Войти</Link>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Register;
