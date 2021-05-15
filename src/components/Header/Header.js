import React from 'react';
import { useLocation} from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

function Header() {
    const location = useLocation();
    const isRegisterPage = location.pathname === '/signup';
    const isLoginPage = location.pathname === '/signin';
    return (
        <>
            {isRegisterPage || isLoginPage ?
                (
                    <header className='header header__movies header-sign'>
                        <div className='header__content header__content-sign'>
                            <img className='header__logo header__logo-sign' src={logo} alt="Логотип" />
                        </div>
                    </header>
                ) :
                (<Navigation />)}
        </>
    );
}

export default Header;
