import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm () {
    return (
        <section className='search'>
            <form className='search__form'>
                <div className='search__image'></div>
                <input
                    className='search__input'
                    type="text"
                    placeholder='Фильм'
                />
                <button className='search__button'>Найти</button>
                <FilterCheckbox />
            </form>
        </section>
    );
}

export default SearchForm;
