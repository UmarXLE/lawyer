import React from 'react';
import {legalServices} from "../../api/data";
import css from './LegalServicesPage.module.scss'
import ServicesItem from "../../shared/feature/ServicesItem/ServicesItem";
import ModalWindow from "../../shared/feature/ModalWindow/ModalWindow";


const LegalServicesPage = () => {
    return (
        <section className={css.wrapper}>
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
                    <a target='_blank'  href="https://wa.me/+996999660996">ОФОРМИТЬ ЗАПИСЬ</a>
                </div>
            </div>

            <ModalWindow />


        </section>
    );
};

export default LegalServicesPage;