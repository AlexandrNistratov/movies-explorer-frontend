import React from 'react';


import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies () {
    return (
       <section className='savedMovies'>
           <SearchForm />
           <MoviesCardList>
               <MoviesCard />
           </MoviesCardList>
       </section>
    );
}

export default SavedMovies;
