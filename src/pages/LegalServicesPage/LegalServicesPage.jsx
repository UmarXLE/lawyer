import React from 'react';
import css from './LegalServicesPage.module.scss'
import Header from "../../components/Header/Header";
import {legalServices} from "../../api/data";
import ServicesItem from "../../shared/feature/ServicesItem/ServicesItem";
import ModalWindow from "../../shared/feature/ModalWindow/ModalWindow";
import Footer from "../../components/Footer/Footer";

const LegalServicesPage = () => {
    return (
        <section className={css.wrapper}>
            <Header />
            <h1>Юридические услуги</h1>
            <div className={css.wrapper__content}>
                <ul className={css.wrapper__content_items}>
                    {
                        legalServices.map(item => {
                            return <ServicesItem
                                descr={item.descr}
                                id = {item.id}
                                key = {item.id}
                            />
                        })
                    }
                </ul>
                <div className={css.wrapper__content_btn}>
                    <a  href="">ОФОРМИТЬ ЗАПИСЬ</a>
                </div>
            </div>

            <ModalWindow />
            <Footer/>


        </section>
    );
};

export default LegalServicesPage;