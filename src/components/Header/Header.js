import React from 'react';
import { useLocation} from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import AuthHeader from '../AuthHeader/AuthHeader';

function Header({ loggedIn }) {
    const location = useLocation();
    const isRegisterPage = location.pathname === '/signup';
    const isLoginPage = location.pathname === '/signin';
    const isProfilePage = location.pathname === '/profile';
    return (
        <>
            {isRegisterPage || isLoginPage || isProfilePage ? (<AuthHeader />) : (<Navigation loggedIn={loggedIn} />)}
        </>
    );
}

export default Header;
