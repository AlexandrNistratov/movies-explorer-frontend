import React from 'react';

function Techs() {
    return (
        <section className='techs'>
            <div className='techs__main'>
                <h2 className='techs__header'>Технологии</h2>
                <div className='techs__content'>
                    <h1 className='techs__title'>7 технологий</h1>
                    <h2 className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h2>
                    <ul className='techs__list'>
                        <button className='techs__item'>HTML</button>
                        <button className='techs__item'>CSS</button>
                        <button className='techs__item'>JS</button>
                        <button className='techs__item'>React</button>
                        <button className='techs__item'>Git</button>
                        <button className='techs__item'>Express</button>
                        <button className='techs__item'>mongoDB</button>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Techs;
