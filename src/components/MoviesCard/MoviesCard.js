import React from 'react';
import { useLocation } from 'react-router-dom';

import moviesCard from '../../images/cardimage.svg';

function MoviesCard () {

    const location = useLocation();

    const isSavedMoviesPage = location.pathname === "/saved-movies";

    return (
        <li className='movieCard'>
            <img className='movieCard__image' src={moviesCard} alt="Картинка"/>
            <div className='movieCard__items'>
                <div className='movieCard__text'>
                    <h2 className='movieCard__title'>33 слова о дизайне</h2>
                    <p className='movieCard__duration'>1ч42м</p>
                </div>
                <button className={isSavedMoviesPage ? 'movieCard__button-delete ' : 'movieCard__button-active'}></button>
            </div>
        </li>
    );
}

export default MoviesCard;
