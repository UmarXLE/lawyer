import React from 'react';
import css from './Map.module.scss'
import adressIcon from '../../media/icons/address.png'
import callIcon from '../../media/icons/call.png'
const Map = () => {
    return (
        <section className={css.wrapper}>
            <div className={css.wrapper__text}>
                <div className={css.wrapper__text_title}>
                    <img src={adressIcon} alt=""/>
                    <p>Адрес</p>
                </div>
                <p className={css.wrapper__text_descr}>Кыргызская Республика, г. Бишкек ул. Манаса 40, 4 - этаж, 1 кабинет </p>
                <div className={css.wrapper__text_subTitle}>
                    <img src={callIcon} alt=""/>
                    <div className={css.wrapper__text_subTitle_container}>
                        <h2>Телефон номер </h2>
                        <a href="">+996 (999) 660 996</a>
                    </div>
                </div>
            </div>

            <div className={css.wrapper__map}>

            </div>
        </section>
    );
};

export default Map;