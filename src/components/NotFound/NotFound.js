import React from 'react';
import { Link } from 'react-router-dom';

function NotFound () {
    return (
        <section className='notFound'>
            <div className='notFound__content'>
                <h1 className='notFound__title'>404</h1>
                <h2 className='notFound__subtitle'>Страница не найдена</h2>
            </div>
            <Link className='notFound__link' to='/'>Назад</Link>
        </section>
    );
}

export default NotFound;
