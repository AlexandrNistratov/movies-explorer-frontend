import React from 'react';


import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {handleFilterMovies, handleFilterShortFilms} from '../../utils/utils';

function SavedMovies ({ savedMovies,moviesSaved, hasMoreButton, loggedIn, handleClickButton, isLoading, setIsLoading }) {
    const [ searchSavedMovies, setSearchSavedMovies ] = React.useState(moviesSaved);
    const [shortsFilmsSaved, setShortsFilmsSaved] = React.useState([]);
    const [isCheckBox, setIsCheckBox] = React.useState(false);
    console.log(searchSavedMovies)
    console.log(shortsFilmsSaved)

    const handleSearch = (value) => {
        setIsLoading(true);
        if (!value) {
            return false;
        }
        setSearchSavedMovies(handleFilterMovies(savedMovies, value));
        if (isCheckBox) {
            return setShortsFilmsSaved(handleFilterShortFilms(savedMovies))
        }
        // setIsLoading(false);
    };

    React.useEffect(() => {
        if (isCheckBox) {
            return setShortsFilmsSaved(handleFilterShortFilms(savedMovies))
        }
    }, [isCheckBox, searchSavedMovies])

    return (
        <section className='savedMovies'>
            <>
                <Header loggedIn={loggedIn} />
                <section className='savedMovies'>
                    <SearchForm
                        handleSearch={handleSearch}
                        setIsCheckBox={setIsCheckBox}
                        isCheckBox={isCheckBox}/>
                    <MoviesCardList
                        hasMoreButton={false}
                        cards={isCheckBox ? shortsFilmsSaved : searchSavedMovies}
                        shortsFilms={shortsFilmsSaved}
                        isCheckBox={isCheckBox}
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
