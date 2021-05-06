import React from 'react';

import moviesCard from '../../images/moviescard.jpg'

function MoviesCard () {
    return (
        <li className='movieCard'>
            <img className='movieCard__image' src={moviesCard} alt="Картинка"/>
            <div className='movieCard__items'>
                <div className='movieCard__text'>
                    <h2 className='movieCard__title'>33 слова о дизайне</h2>
                    <p className='movieCard__duration'>1ч42м</p>
                </div>
                <button className='movieCard__button'></button>
            </div>
        </li>
    );
}

export default MoviesCard;
