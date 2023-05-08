import React from 'react';
import css from './Intro.module.scss'

const Intro = () => {
    return (
        <section className={css.wrapper}>
            <div className={css.wrapper__text}>
                <h1>УВЕЛИЧИТЕ СВОЮ ПРИБЫЛЬ И СНИЗИТЕ РАСХОДЫ, ИСПОЛЬЗУЯ БУХГАЛТЕРСКИЕ, НАЛОГОВЫЕ И ЮРИДИЧЕСКИЕ РЕШЕНИЯ</h1>
            </div>
            <div>
                <a target='_blank' href="" className={css.wrapper__btn}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</a>
            </div>
        </section>
    );
};

export default Intro;