import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard';
import {getMovieNumber, loadMovies } from '../../utils/utils';
import movieApi from '../../utils/MoviesApi';

function MoviesCardList () {
    // Карточки с сервера
    const [ moviesCards, setMoviesCards ] = React.useState([]);
    const [ countMovies, setCountMovies] = React.useState(getMovieNumber());

    React.useEffect(() => {
        movieApi.getAllMovies()
            .then(data => {
                setMoviesCards(data)
            })
            .catch(err => console.log(err))
    }, []);

    // Кнопка еще
    const handleClickMoreButton = () => {
        setCountMovies(countMovies + loadMovies());
    }


    return (
        <Switch>
            <Route exact path='/movies'>
                <section className='moveCardList' >
                        <div className='moveCardList__content'>
                            {
                                moviesCards.slice(0, countMovies).map((moviesCard) => <MoviesCard key={moviesCard.id} moviesCard={moviesCard} />)
                            }
                        </div>
                    <button className={moviesCards.length - countMovies <= 0 ? 'moveCardList__button-hidden' : 'moveCardList__button'} onClick={handleClickMoreButton}>Ещё</button>
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
