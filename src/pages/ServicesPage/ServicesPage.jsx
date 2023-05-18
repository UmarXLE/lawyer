import React from 'react';
import css from './ServicesPage.module.scss'
import Header from "../../components/Header/Header";

const ServicesPage = () => {
    return (
        <section className={css.wrapper}>
            <Header />
            <h1>Бухгалтерские  услуги</h1>
        </section>
    );
};

export default ServicesPage;