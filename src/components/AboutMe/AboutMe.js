import React from 'react';
import avatar from '../../images/avatar.jpeg'

function AboutMe() {
    return (
        <section className='aboutMe'>
            <div className='aboutMe__main'>
                <h2 className='aboutProject__title'>Студент</h2>
                <div className='aboutMe__content'>
                    <img className='aboytMe__avatar' src={avatar} alt="Аватарка"/>
                    <div className='abotMe__profile'>
                        <h2 className='aboutMe__subtitle' >Александр</h2>
                        <h2 className='aboutMe__text' >Фронтенд-разработчик, 29 лет</h2>
                        <p className='aboutMe__paragraph'>Я родился в Тамбове, живу в Москве. Недавно начал кодить. После того, как пройду курс по веб-разработке, начну искать работу в данном направлении.</p>
                        <ul className='aboutMe__nav'>
                            <button className='aboutMe__link'>Facebook</button>
                            <button className='aboutMe__link'>Github</button>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
