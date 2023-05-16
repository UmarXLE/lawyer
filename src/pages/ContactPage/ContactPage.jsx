import React from 'react';

import css from './ContactPage.module.scss'

import Map from "../../components/Map/Map";
const ContactPage = () => {
    return (
        <section className={css.wrapper}>
            <h1>Контактная информация:</h1>
            <div className={css.wrapper__text}>
                <h2>ОсОО «Алгоритм прайм»</h2>
                <p>Почта: <a href="mailto:algoritmprime.kg@gmail.com">algoritmprime.kg@gmail.com</a> </p>
                <p>Реквизиты компании</p>
                <p>ИНН: 02603202110460</p>
                <p>ОКПО: 31142188</p>
            </div>
            <Map />
        </section>
    );
};

export default ContactPage;