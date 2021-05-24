import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import movieApi from '../../utils/MoviesApi';


function Movies({ loggedIn, handleClickSaveButton, hasMoreButton }) {
    const [ moviesCards, setMoviesCards ] = React.useState([]);

    React.useEffect(() => {
        movieApi.getAllMovies()
            .then(data => {
                setMoviesCards(data);
                hasMoreButton(true);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <Header
                loggedIn={loggedIn} />
            <section className='movies'>
                <SearchForm />
                {/*<Preloader />*/}
                <MoviesCardList
                    handleClickSaveButton={handleClickSaveButton}
                    moviesCards={moviesCards}
                    hasMoreButton={hasMoreButton} />
            </section>
            <Footer />
        </>

    );
}

export default Movies;
