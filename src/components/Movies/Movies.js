import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import {  handleFilterMovies, handleFilterShortFilms } from '../../utils/utils';


function Movies({ loggedIn, handleClickButton, hasMoreButton, moviesCards, isLoading, moviesSaved }) {
    const [ searchMovies, setSearchMovies ] = React.useState([]);
    const [shortsFilms, setShortsFilms] = React.useState([]);
    const [isCheckBox, setIsCheckBox] = React.useState(false);

    const handleSearch = (value) => {
        // setIsLoading(true);
        if (!value) {
            setSearchMovies([]);
            return false;
        }
        const filterMovies = handleFilterMovies(moviesCards, value)
        localStorage.setItem('filter-movies', JSON.stringify(filterMovies))
        setSearchMovies(filterMovies);

    };

    React.useEffect(() => {
        const searchLocalStorage = JSON.parse(localStorage.getItem('filter-movies'));
        if (searchLocalStorage) {
            return setSearchMovies(searchLocalStorage)
        }

    },[])

    React.useEffect(() => {
        if (isCheckBox) {
            return setShortsFilms(handleFilterShortFilms(moviesCards))
        }
    }, [isCheckBox])

    return (
        <>
            <Header
                loggedIn={loggedIn} />
            <section className='movies'>
                <SearchForm
                    handleSearch={handleSearch}
                    setIsCheckBox={setIsCheckBox}
                    isCheckBox={isCheckBox}
                    />
                {isLoading ? <Preloader /> : ''}
                    <MoviesCardList
                        handleClickButton={handleClickButton}
                        cards={isCheckBox ? shortsFilms : searchMovies}
                        shortsFilms={shortsFilms}
                        isCheckBox={isCheckBox}
                        moviesSaved={moviesSaved}
                        hasMoreButton={hasMoreButton} />

            </section>
            <Footer />
        </>

    );
}

export default Movies;
