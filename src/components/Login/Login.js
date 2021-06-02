import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Login ({ handleLogin }) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        if (!values.email || !values.password) {
            return;
        }
        handleLogin(values.email, values.password);
    }

    return (
        <>
            <Header />
            <section className='login'>
                <form className='register__form' name='logForm' onSubmit={handleSubmit} noValidate>
                    <h1 className='profile__title register__title'>Рады видеть!</h1>
                    <label className='register__label'>E-mail</label>
                    <input id='user-email'
                           required
                           className='register__input'
                           type="email"
                           name='email'
                           value={values.email || ''}
                           onChange={handleChange}/>
                    <span className="error" id="user-email-error">{errors.email}</span>
                    <label className='register__label'>Пароль</label>
                    <input id='user-password'
                           required
                           className='register__input'
                           type="password"
                           name='password'
                           minLength="6"
                           value={values.password || ''}
                           onChange={handleChange}/>
                    <span className="error" id="user-password-error">{errors.password}</span>
                    <button className={isValid ? 'register__button login__button' : 'register__button login__button register__button_disabled '}>Войти</button>
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

