import React from 'react';

function Profile () {
    return (
        <div className='profile'>
            <section className='profile__container'>
                <h1 className='profile__title'>Привет, Виталий!</h1>
                <form className='profile__form'>
                    <input className='profile__input' type="text" placeholder='Имя' />
                    <input className='profile__input' type="email" placeholder='E-mail' />
                    <button className='profile__button-edit'>Редактировать</button>
                    <button className='profile__button-exit'>Выйти из аккаунта</button>
                </form>
            </section>
        </div>
    );
}

export default Profile;
