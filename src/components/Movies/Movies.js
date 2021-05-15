import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({ cards, loadMovies }) {
    return (
        <>
            <Header />
            <section className='movies'>
                <SearchForm />
                {/*<Preloader />*/}
                <MoviesCardList
                    cards={cards}
                    loadMovies={loadMovies}
                />
            </section>
            <Footer />
        </>

    );
}

export default Movies;
