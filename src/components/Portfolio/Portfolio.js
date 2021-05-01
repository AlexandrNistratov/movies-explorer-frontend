import React from 'react';

import arrow from '../../images/text__COLOR_font-main.svg';
function Portfolio() {
    return (
        <section className='portfolio'>
            <div className='portfolio__content'>
                <h2 className='portfolio__header'>Портфолио</h2>
                <ul className='portfolio__nav'>
                    <li className='portfolio__list'>
                        <a className='portfolio__link' href="">
                            <p className='portfolio__text'>Статичный сайт</p>
                            <img className='portfolio__img' src={arrow} alt=""/>
                        </a>
                    </li>
                    <li className='portfolio__list'>
                        <a className='portfolio__link' href="">
                            <p className='portfolio__text'>Адаптивный сайт</p>
                            <img className='portfolio__img' src={arrow} alt=""/>
                        </a>
                    </li>
                    <li className='portfolio__list'>
                        <a className='portfolio__link' href="">
                            <p className='portfolio__text'>Одностраничное приложение</p>
                            <img className='portfolio__img' src={arrow} alt=""/>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;
