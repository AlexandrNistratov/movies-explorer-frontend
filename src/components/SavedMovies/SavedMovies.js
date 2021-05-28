import React from 'react';


import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies ({ savedMovies, hasMoreButton, loggedIn, handleClickSaveButton }) {


    return (
       <>
           <Header loggedIn={loggedIn} />
           <section className='savedMovies'>
               <SearchForm />
               <MoviesCardList
                   hasMoreButton={false}
                   cards={savedMovies}
                   handleClickSaveButton={handleClickSaveButton}>
               </MoviesCardList>
           </section>
           <Footer />
       </>
    );
}

export default SavedMovies;
