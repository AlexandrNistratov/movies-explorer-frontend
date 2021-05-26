import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import {  handleFilterMovies } from '../../utils/utils';


function Movies({ loggedIn, handleClickSaveButton, hasMoreButton, moviesCards, isLoading, setIsLoading }) {
    const [ searchMovies, setSearchMovies ] = React.useState([]);

    const handleSearch = (value) => {
        setIsLoading(true);
        setSearchMovies(handleFilterMovies(moviesCards, value));
        setIsLoading(false);
    };

    return (
        <>
            <Header
                loggedIn={loggedIn} />
            <section className='movies'>
                <SearchForm
                    handleSearch={handleSearch} />
                {isLoading ? <Preloader /> :
                    <MoviesCardList
                        handleClickSaveButton={handleClickSaveButton}
                        cards={searchMovies}
                        hasMoreButton={hasMoreButton} />
                }
            </section>
            <Footer />
        </>

    );
}

export default Movies;
