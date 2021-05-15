import React from 'react';

function AboutProject() {
    return (
        <section className='aboutProject' id='aboutProject'>
            <h2 className='aboutProject__title'>О проекте</h2>
            <ul className='aboutProject__list'>
                <li className='aboutProject__item'>
                    <h2 className='aboutProject__subtitle'>Дипломный проект включал 5 этапов</h2>
                    <h3 className='aboutProject__paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</h3>
                </li>
                <li className='aboutProject__item'>
                    <h2 className='aboutProject__subtitle'>На выполнение диплома ушло 5 недель</h2>
                    <h3 className='aboutProject__paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</h3>
                </li>
            </ul>
            <div className='aboutProject__progressBar'>
                <div className='aboutProject__scale'>
                    <div className='aboutProject__text'>1 неделя</div>
                    <h3 className='aboutProject__stack_text'>Back-end</h3>
                </div>
                <div className='aboutProject__scale'>
                    <div className=' aboutProject__text aboutProject__text-frontend'>4 недели</div>
                    <h3 className='aboutProject__stack_text'>Front-end</h3>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;
