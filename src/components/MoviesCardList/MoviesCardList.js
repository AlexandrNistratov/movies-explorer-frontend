import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import {getMovieNumber, loadMovies, getMovieKey } from '../../utils/utils';

function MoviesCardList ({ handleClickSaveButton, cards, hasMoreButton }) {
    const [ countMovies, setCountMovies] = React.useState(getMovieNumber());

    // Кнопка еще
    const handleClickMoreButton = () => {
        setCountMovies(countMovies + loadMovies());
    }

    return (
        <section className='moveCardList' >
            <div className='moveCardList__content'>
                {
                    cards.slice(0, countMovies).map((moviesCard) => <MoviesCard key={getMovieKey(moviesCard)} moviesCard={moviesCard}  handleClickSaveButton={handleClickSaveButton} />)
                }
            </div>
            {hasMoreButton ?
                <button className={cards.length - countMovies <= 0 ? 'moveCardList__button-hidden' : 'moveCardList__button'} onClick={handleClickMoreButton}>Ещё</button>
                :
                ''
            }

        </section>
    );
}

export default MoviesCardList;
