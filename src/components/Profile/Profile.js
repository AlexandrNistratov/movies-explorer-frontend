import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useHistory } from 'react-router-dom';

import Header from '../Header/Header';

function Profile ({ handleLogout, userData, onUpdateUser }) {
    const [name, setName] = React.useState(userData.name);
    const [email, setEmail] = React.useState(userData.email);

    console.log(userData)


    const history = useHistory();
    const currentUser = React.useContext(CurrentUserContext);

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    React.useEffect(() => {
        setName(currentUser.name || name);
        setEmail(currentUser.email || email);
    }, [currentUser]);



    function handleSubmit(e) {
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name: name,
            email: email,
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
                    <h1 className='profile__title'>{`Привет, ${name}!`}</h1>
                    <form className='profile__form' onSubmit={handleSubmit}>
                        <div className='profile__edit'>
                            <label id='profile__input' className='profile__label'>Имя</label>
                            <input id='profile__input'
                                   className='profile__input'
                                   type="text"
                                   onChange={handleChangeName}
                                   value={name || ''} />
                        </div>
                        <div className='profile__edit'>
                            <label id='profile__input' className='profile__label'>E-mail</label>
                            <input id='profile__input'
                                   className='profile__input'
                                   type="email"
                                   onChange={handleChangeEmail}
                                   value={email || ''} />
                        </div>
                        <button className='profile__button'>Редактировать</button>
                        <button className='profile__button profile__button-exit' onClick={handleLogout}>Выйти из аккаунта</button>
                    </form>
                </section>
            </div>
        </>
    );
}

export default Profile;
