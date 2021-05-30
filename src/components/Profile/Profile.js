import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useHistory } from 'react-router-dom';

import Header from '../Header/Header';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile ({ handleLogout, onUpdateUser }) {
    const {values, setValues, handleChange, errors, isValid} = useFormWithValidation();

    const history = useHistory();
    const currentUser = React.useContext(CurrentUserContext);


    React.useEffect(() => {
        setValues({
            name: currentUser.name,
            email: currentUser.email
        });
    }, [currentUser, setValues]);



    function handleSubmit(e) {
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name: values.name || currentUser.name,
            email: values.email || currentUser.email,
        });
        setTimeout(() => {
            history.push('/movies');
        }, 1000);
    }

    return (
        <>
            <Header />
            <div className='profile'>
                <section className='profile__container'>
                    <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
                    <form className='profile__form' onSubmit={handleSubmit} noValidate>
                        <div className='profile__edit'>
                            <label id='profile__input' className='profile__label'>Имя</label>
                            <input id='user-name'
                                   name='name'
                                   className='profile__input'
                                   type="text"
                                   onChange={handleChange}
                                   value={values.name || ''} />
                            <span className="error" id="user-name-error">{errors.name}</span>
                        </div>
                        <div className='profile__edit'>
                            <label id='profile__input' className='profile__label'>E-mail</label>
                            <input id='user-email'
                                   name='email'
                                   className='profile__input'
                                   type="email"
                                   onChange={handleChange}
                                   value={values.email || ''} />
                            <span className="error" id="user-email-error">{errors.email}</span>
                        </div>
                        <button className={isValid ? 'profile__button' : 'profile__button profile__button_disabled'}>Редактировать</button>
                        <button className='profile__button profile__button-exit' onClick={handleLogout}>Выйти из аккаунта</button>
                    </form>
                </section>
            </div>
        </>
    );
}

export default Profile;
