import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../Header/Header';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Register ({ handleRegister }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        handleRegister(values.name, values.email, values.password);
    }

    return(
        <>
            <Header />
            <section className='register'>
                <form className='register__form'
                    onSubmit={handleSubmit}
                      noValidate
                >
                    <h1 className='profile__title register__title'>Добро пожаловать!</h1>
                    <label className='register__label'>Имя</label>
                    <input id="user-name"
                           required
                           className='register__input'
                           type="text"
                           name='name'
                           value={values.name || ''}
                           onChange={handleChange} />
                    <span className="error" id="user-name-error">{errors.name}</span>
                    <label className='register__label'>E-mail</label>
                    <input id="user-email"
                           required
                           className='register__input'
                           type="email"
                           name='email'
                           value={values.email || ''}
                           onChange={handleChange} />
                    <span className="error" id="user-email-error">{errors.email}</span>
                    <label className='register__label'>Пароль</label>
                    <input id="user-password"
                           required
                           className='register__input'
                           type="password"
                           name='password'
                           value={values.password || ''}
                           onChange={handleChange} />
                    <span className="error" id="user-password-error">{errors.password}</span>
                    <button className={isValid ? 'register__button login__button' : 'register__button login__button register__button_disabled'} type='submit'>Зарегистрироваться</button>
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
