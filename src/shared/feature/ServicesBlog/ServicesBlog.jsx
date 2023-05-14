import React from 'react';
import css from './ServicesBlog.module.scss'
import icon1 from '../../../media/images/services-blog-1.png'
import icon2 from '../../../media/images/services-blog-2.png'
import {Link} from "react-router-dom";

const ServicesBlog = () => {
    return (
        <section className={css.wrapper}>
            <Link to='/accountingservice' className={css.wrapper__item}>
                <h1>Бухгалтерские услуги </h1>
                <img src={icon1} alt="imgIcon"/>
            </Link>
            <Link to='/legalservice' className={css.wrapper__item}>
                <h1>Юридические услуги </h1>
                <img src={icon2} alt="imgIcon"/>
            </Link>
        </section>
    );
};

export default ServicesBlog;