import React from 'react';



function NavTab() {
    return (
        <ul className='navTab'>
            <li className='navTab__links'><a className='navTab__item' href="#aboutProject">О проекте</a></li>
            <li className='navTab__links'><a className='navTab__item' href="#techs">Технологии</a></li>
            <li className='navTab__links'><a className='navTab__item' href="#aboutMe">Студент</a></li>
        </ul>
    );
}

export default NavTab;
