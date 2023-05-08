import React from 'react';
import css from './ContactPage.module.scss'
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import Footer from "../../components/Footer/Footer";
const ContactPage = () => {
    return (

        <section className={css.wrapper}>
            <Header />
            <h1>Контактная информация:</h1>
            <div className={css.wrapper__text}>
                <h2>ОсОО «Алгоритм прайм»</h2>
                <p>Почта: <a href="">algoritmprime.kg@gmail.com</a> </p>
                <p>Реквизиты компании</p>
                <p>ИНН: 02603202110460</p>
                <p>ОКПО: 31142188</p>
            </div>
            <Map />
            <Footer />
        </section>
    );
};

export default ContactPage;