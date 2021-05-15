import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList () {
    return (
        <Switch>
            <Route exact path='/movies'>
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
