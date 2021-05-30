import React from 'react';

function FilterCheckbox ({ isCheckBox, setIsShortsFilms }) {
    return (
        <section className='filterCheckbox'>
            <div className='filterCheckbox__container'>
                <input type="checkbox"  className="filterCheckbox__button" onChange={setIsShortsFilms} checked={isCheckBox} />
                <label  className="filterCheckbox__text">Короткометражки</label>
            </div>
        </section>
    )
}

export default FilterCheckbox;
