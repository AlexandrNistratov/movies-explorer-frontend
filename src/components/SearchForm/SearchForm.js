import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { MESSAGE_NO_VALUE } from '../../utils/constants';
// handleToggleCheckBox, isOn
function SearchForm ({ handleSearch, isCheckBox, setIsCheckBox  }) {
    const [ value, setValue ] = React.useState('');
    const [error, setError] = React.useState('');

    function handleChange (e) {
        setValue(e.target.value);
    }

    function handleSubmit (e) {
        console.log(value)
        e.preventDefault();
        if (!value) {
            setError(MESSAGE_NO_VALUE)
        }
        setError('');
        console.log(value)
        handleSearch(value);
    }

    return (
        <section className='search'>
            <div className='search__content'>
                <form className='search__form' onSubmit={handleSubmit} noValidate>
                    <div className='search__image'></div>
                    <div className='search__container'>
                        <input
                            className='search__input'
                            id='search__input'
                            type="text"
                            placeholder='Фильм'
                            required
                            value={value}
                            onChange={handleChange}
                        />
                        <span className="search__error" id='search__input-error' >{error}</span>
                        <button className='search__button'>Найти</button>
                    </div>
                </form>

                <FilterCheckbox
                    isCheckBox={isCheckBox}
                    setIsCheckBox={setIsCheckBox}
                />
            </div>
        </section>
    );
}

export default SearchForm;
