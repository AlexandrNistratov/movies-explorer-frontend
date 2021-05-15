import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm () {
    return (
        <section className='search'>
            <div className='search__content'>
                <form className='search__form'>
                    <div className='search__image'></div>
                    <div className='search__container'>
                        <input
                            className='search__input'
                            type="text"
                            placeholder='Фильм'
                            required
                        />
                        <button className='search__button'>Найти</button>
                    </div>
                </form>
                <FilterCheckbox />
            </div>
        </section>
    );
}

export default SearchForm;
