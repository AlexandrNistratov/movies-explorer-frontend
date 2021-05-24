import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Login ({ handleLogin }) {
    const [data, setData] = React.useState({
        logEmail: '',
        logPassword: ''
    });
    const [message, setMessage] = React.useState('');

    function handleChange(e) {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!data.logEmail || !data.logPassword) {
            return;
        }
        handleLogin(data.logEmail, data.logPassword);
    }

    return (
        <>
            <Header />
            <section className='login'>
                <form className='register__form' name='logForm' onSubmit={handleSubmit}>
                    <h1 className='profile__title register__title'>Рады видеть!</h1>
                    <label className='register__label'>E-mail</label>
                    <input id='user-email'
                           required
                           className='register__input'
                           type="email"
                           name='logEmail'
                           value={data.email}
                           onChange={handleChange}/>
                    <span className="error" id="user-email-error">{message}</span>
                    <label className='register__label'>Пароль</label>
                    <input id='user-password'
                           required
                           className='register__input'
                           type="password"
                           name='logPassword'
                           value={data.password}
                           onChange={handleChange}/>
                    <span className="error" id="user-password-error">{message}</span>
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
