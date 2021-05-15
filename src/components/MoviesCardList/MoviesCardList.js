import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard';

import {getMovieNumber} from '../../utils/utils';

function MoviesCardList ({ cards, loadMovies }) {

    return (
        <Switch>
            <Route exact path='/movies'>
                <section className='moveCardList' >
                        <div className='moveCardList__content'>
                            {
                                cards.slice(0, getMovieNumber()).map((moviesCard) => <MoviesCard key={moviesCard.id} moviesCard={moviesCard} />)
                            }
                        </div>
                    <button className='moveCardList__button' onClick={loadMovies}>Ещё</button>
                </section>
            </Route>
            <Route exact path='/saved-movies'>
                <section className='moveCardList' >
                    <div className='moveCardList__content'>
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                    </div>
                </section>
            </Route>
        </Switch>

    );
}

export default MoviesCardList;
