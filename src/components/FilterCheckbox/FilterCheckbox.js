import React from 'react';

function FilterCheckbox () {
    return (
        <section className='filterCheckbox'>
            <div className='filterCheckbox__container'>
                <input type="checkbox"  className="filterCheckbox__button" />
                <label  className="filterCheckbox__text">Короткометражки</label>
            </div>
        </section>
    )
}

export default FilterCheckbox;
