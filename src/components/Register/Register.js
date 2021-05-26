import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Register ({ handleRegister }) {
    const [ data, setData ] = React.useState({
        regName: '',
        regEmail: '',
        regPassword: ''
    })
    // console.log(data)

    function handleChange(e) {
        const {name, value} = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { regName, regEmail, regPassword } = data;
        handleRegister(regName, regEmail, regPassword);
    }

    return(
        <>
            <Header />
            <section className='register'>
                <form className='register__form'
                    onSubmit={handleSubmit}
                >
                    <h1 className='profile__title register__title'>Добро пожаловать!</h1>
                    <label className='register__label'>Имя</label>
                    <input id="user-name"
                           required
                           className='register__input'
                           type="text"
                           name='regName'
                           value={data.name}
                           onChange={handleChange} />
                    <span className="error" id="user-name-error"></span>
                    <label className='register__label'>E-mail</label>
                    <input id="user-email"
                           required
                           className='register__input'
                           type="email"
                           name='regEmail'
                           value={data.email}
                           onChange={handleChange} />
                    <span className="error" id="user-email-error"></span>
                    <label className='register__label'>Пароль</label>
                    <input id="user-password"
                           required
                           className='register__input'
                           type="password"
                           name='regPassword'
                           value={data.password}
                           onChange={handleChange} />
                    <span className="error" id="user-password-error"></span>
                    <button className='register__button' type='submit'>Зарегистрироваться</button>
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
