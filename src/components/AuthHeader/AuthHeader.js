import React from 'react';
import logo from '../../images/logo.svg';

function AuthHeader () {
    return (
        <header className='header header__movies header-sign'>
            <div className='header__content header__content-sign'>
                <img className='header__logo header__logo-sign' src={logo} alt="Логотип" />
            </div>
        </header>
    )
}

export default AuthHeader;

