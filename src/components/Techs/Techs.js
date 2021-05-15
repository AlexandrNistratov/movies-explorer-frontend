import React from 'react';

function Techs() {
    return (
        <section className='techs'>
            <div className='techs__main'>
                <h2 className='aboutProject__title'>Технологии</h2>
                <div className='techs__content'>
                    <h1 className='techs__title'>7 технологий</h1>
                    <h2 className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h2>
                    <ul className='techs__list'>
                        <li className='techs__item'>HTML</li>
                        <li className='techs__item'>CSS</li>
                        <li className='techs__item'>JS</li>
                        <li className='techs__item'>React</li>
                        <li className='techs__item'>Git</li>
                        <li className='techs__item'>Express</li>
                        <li className='techs__item'>mongoDB</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Techs;
