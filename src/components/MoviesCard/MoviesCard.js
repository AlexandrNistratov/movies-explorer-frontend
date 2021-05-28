import React from 'react';
import { useLocation } from 'react-router-dom';

import { getCardImage, getMovieDuration } from '../../utils/utils';

function MoviesCard ({ moviesCard, handleClickSaveButton }) {

    const location = useLocation();

    const isSavedMoviesPage = location.pathname === "/saved-movies";

    const handleCardClick = () => {
        handleClickSaveButton(moviesCard);
    }

    return (
        <li className='movieCard'>
            <a className='movieCard__container' href={moviesCard.trailerLink || moviesCard.trailer} target="_blank" rel = "noreferrer">
                <img className='movieCard__image' src={getCardImage(moviesCard)} alt="Картинка"/>
            </a>
            <div className='movieCard__items'>
                <div className='movieCard__text'>
                    <h2 className='movieCard__title'>{moviesCard.nameRU}</h2>
                    <p className='movieCard__duration'>{getMovieDuration(moviesCard)}</p>
                </div>
                {isSavedMoviesPage ?
                    <button className='movieCard__button-delete '  onClick={handleCardClick}/>
                    :
                    <button className={moviesCard.isSaved ? 'movieCard__button movieCard__button-active' : 'movieCard__button'} onClick={handleCardClick}/>
                }
            </div>
        </li>
    );
}

export default MoviesCard;
