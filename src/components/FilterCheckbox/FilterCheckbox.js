import React from 'react';

function FilterCheckbox ({ isCheckBox, setIsCheckBox }) {
    const toggleCheckbox = () => {
        setIsCheckBox(!isCheckBox);
    }
    return (
        <section className='filterCheckbox'>
            <div className='filterCheckbox__container'>
                <input type="checkbox"  className="filterCheckbox__button" onChange={toggleCheckbox} checked={isCheckBox} />
                <label  className="filterCheckbox__text">Короткометражки</label>
            </div>
        </section>
    )
}

export default FilterCheckbox;
