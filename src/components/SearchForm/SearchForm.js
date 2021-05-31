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
        e.preventDefault();
        if (!value) {
            setError(MESSAGE_NO_VALUE);
            return false;
        }
        setError('');
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

                        <button className='search__button'>Найти</button>
                    </div>
                </form>
                <FilterCheckbox
                    isCheckBox={isCheckBox}
                    setIsCheckBox={setIsCheckBox}
                />
            </div>
            <span className="error error__messages" id='search__input-error' >{error}</span>
        </section>
    );
}

export default SearchForm;
