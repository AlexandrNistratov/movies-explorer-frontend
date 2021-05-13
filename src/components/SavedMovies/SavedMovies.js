import React from 'react';


import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies () {
    return (
       <>
           <Header />
           <section className='savedMovies'>
               <SearchForm />
               <MoviesCardList>
                   <MoviesCard />
               </MoviesCardList>
           </section>
           <Footer />
       </>
    );
}

export default SavedMovies;
