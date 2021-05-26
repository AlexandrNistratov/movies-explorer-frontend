import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm ({ handleSearch }) {
    const [ value, setValue ] = React.useState('');

    function handleChange (e) {
        setValue(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        handleSearch(value)

    }
    return (
        <section className='search'>
            <div className='search__content'>
                <form className='search__form' onSubmit={handleSubmit}>
                    <div className='search__image'></div>
                    <div className='search__container'>
                        <input
                            className='search__input'
                            type="text"
                            placeholder='Фильм'
                            required
                            value={value}
                            onChange={handleChange}
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
