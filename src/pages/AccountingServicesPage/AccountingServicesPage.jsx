import React from 'react';
import css from './AccountingServicesPage.module.scss'
import Header from "../../components/Header/Header";
import {accountingServices} from "../../api/data";
import ServicesItem from "../../shared/feature/ServicesItem/ServicesItem";
import ModalWindow from "../../shared/feature/ModalWindow/ModalWindow";
import Footer from "../../components/Footer/Footer";

const AccountingServicesPage = () => {
    return (
        <section className={css.wrapper}>
            <Header />
            <h1 className={css.wrapper__title}>Бухгалтерские  услуги</h1>
            <div className={css.wrapper__content}>
                <div className={css.wrapper__content_items}>
                    {
                        accountingServices.map(item => {
                            return <ServicesItem
                                id = {item.id}
                                key = {item.id}
                                descr= {item.descr}
                            />
                        })
                    }
                </div>

                <div className={css.wrapper__content_btns}>
                    <a className={css.wrapper__content_btns_except}>Пакет на 1 месяц <br/>
                        (пробный период)</a>
                    <a>Пакет на 3 месяца</a>
                    <a>Пакет на 6 месяцев</a>
                    <a>Пакет на 12 месяцев</a>
                </div>
            </div>
            <ModalWindow/>
            <Footer />
        </section>
    );
};

export default AccountingServicesPage;