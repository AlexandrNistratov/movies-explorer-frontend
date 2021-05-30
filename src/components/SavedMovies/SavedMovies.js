import React from 'react';


import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies ({ savedMovies,moviesSaved, hasMoreButton, loggedIn, handleClickButton }) {

    return (
        <section className='savedMovies'>
            <>
                <Header loggedIn={loggedIn} />
                <section className='savedMovies'>
                    <SearchForm />
                    <MoviesCardList
                        hasMoreButton={false}
                        cards={savedMovies}
                        moviesSaved={moviesSaved}
                        handleClickButton={handleClickButton}>
                    </MoviesCardList>
                </section>
                <Footer />
            </>
        </section>

    );
}

export default SavedMovies;
