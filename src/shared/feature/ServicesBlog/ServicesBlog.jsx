import React from 'react';
import css from './ServicesBlog.module.scss'
import icon1 from '../../../media/images/services-blog-1.png'
import icon2 from '../../../media/images/services-blog-2.png'

const ServicesBlog = () => {
    return (
        <section className={css.wrapper}>
            <div className={css.wrapper__item}>
                <h1>Бухгалтерские услуги </h1>
                <img src={icon1} alt=""/>
            </div>
            <div className={css.wrapper__item}>
                <h1>Юридические услуги </h1>
                <img src={icon2} alt=""/>
            </div>
        </section>
    );
};

export default ServicesBlog;