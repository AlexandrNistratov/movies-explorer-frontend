import React from 'react';

function Profile () {
    return (
        <div className='profile'>
            <section className='profile__container'>
                <h1 className='profile__title'>Привет, Виталий!</h1>
                <form className='profile__form'>
                    <div className='profile__edit'>
                        <label id='profile__input' className='profile__label'>Имя</label>
                        <input id='profile__input' className='profile__input' type="text" />
                    </div>
                    <div className='profile__edit'>
                        <label id='profile__input' className='profile__label'>E-mail</label>
                        <input id='profile__input' className='profile__input' type="email" />
                    </div>
                    <button className='profile__button'>Редактировать</button>
                    <button className='profile__button profile__button-exit'>Выйти из аккаунта</button>
                </form>
            </section>
        </div>
    );
}

export default Profile;
