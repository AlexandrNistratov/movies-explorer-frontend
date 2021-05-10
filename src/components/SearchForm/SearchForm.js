import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm () {
    return (
        <section className='search'>
            <form className='search__form'>
                <div className='search__image'></div>
                <div className='search__container'>
                    <input
                        className='search__input'
                        type="text"
                        placeholder='Фильм'
                    />
                    <button className='search__button'>Найти</button>
                </div>
                <FilterCheckbox />
            </form>
        </section>
    );
}

export default SearchForm;
