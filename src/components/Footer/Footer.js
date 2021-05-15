import React from 'react';

function Footer() {
    return (
        <section className='footer'>
            <div className='footer__container'>
                <div className='footer__content'>
                    <h2 className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                    <div className='footer__nav'>
                        <p className='footer__copyright'>&copy;&nbsp;2020</p>
                        <ul className='footer__links'>
                            <a className='footer__link' href="">Яндекс.Практикум</a>
                            <a className='footer__link' href="">Github</a>
                            <a className='footer__link' href="">Facebook</a>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
