import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList () {
    return (
        <section className='moveCardList' >
            <div className='moveCardList__content'>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <button className='moveCardList__button'>Ещё</button>
        </section>
    );
}

export default MoviesCardList;
