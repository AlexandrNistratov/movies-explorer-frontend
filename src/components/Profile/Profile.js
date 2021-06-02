import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useHistory } from 'react-router-dom';

import Header from '../Header/Header';

import {PROFILE_UPDATE} from '../../utils/constants';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile ({ handleLogout, onUpdateUser, loggedIn }) {
    const {values, setValues, handleChange, errors, isValid} = useFormWithValidation();
    const [message, setMessage] = React.useState('');

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setValues({
            name: currentUser.name,
            email: currentUser.email
        });
    }, [currentUser, setValues]);

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name: values.name || currentUser.name,
            email: values.email || currentUser.email,
        });
        setMessage(PROFILE_UPDATE)
    }

    function handleValues() {
        if (values.name === currentUser.name && values.email === currentUser.email) {
            return false;
        }
    }

    return (
        <>
            <Header  loggedIn={loggedIn}/>
            <div className='profile'>
                <section className='profile__container'>
                    <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
                    <form className='profile__form' onSubmit={handleSubmit} noValidate>
                        <div className='profile__edit'>
                            <label id='profile__input' className='profile__label'>Имя</label>
                            <input id='user-name'
                                   name='name'
                                   minLength='2'
                                   maxLength='30'
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
                        {handleValues() || isValid ?
                            <button className='profile__button'>Редактировать</button>
                            :
                            <button className='profile__button profile__button_disabled' disabled>Редактировать</button>
                        }
                        <button className='profile__button profile__button-exit' onClick={handleLogout}>Выйти из аккаунта</button>
                        <span className="success">{message}</span>
                    </form>
                </section>
            </div>
        </>
    );
}

export default Profile;
