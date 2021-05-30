import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import {  handleFilterMovies, handleFilterShortFilms } from '../../utils/utils';


function Movies({ loggedIn, handleClickButton, hasMoreButton, moviesCards, isLoading, setIsLoading, moviesSaved }) {
    const [ searchMovies, setSearchMovies ] = React.useState([]);
    const [isShortsFilms, setIsShortsFilms] = React.useState([]);
    const [isCheckBox, setIsCheckBox] = React.useState(false);

    const handleSearch = (value) => {
        setIsLoading(true);
        setSearchMovies(handleFilterMovies(moviesCards, value));
        // setIsLoading(false);
    };

    React.useEffect(() => {
        if (isCheckBox) {
            return setIsShortsFilms(handleFilterShortFilms(moviesCards))
        }
    }, [isCheckBox])

    return (
        <>
            <Header
                loggedIn={loggedIn} />
            <section className='movies'>
                <SearchForm
                    handleSearch={handleSearch}
                    setIsShortsFilms={setIsShortsFilms}
                    isCheckBox={isCheckBox}
                    />
                {/*{isLoading && <Preloader />}*/}
                    <MoviesCardList
                        handleClickButton={handleClickButton}
                        cards={searchMovies}
                        setIsShortsFilms={setIsShortsFilms}
                        isCheckBox={isCheckBox}
                        moviesSaved={moviesSaved}
                        hasMoreButton={hasMoreButton} />

            </section>
            <Footer />
        </>

    );
}

export default Movies;
