import React, {useEffect, useState} from 'react';

import css from './AccountingServicesPage.module.scss'


import ServicesItem from "../../shared/feature/ServicesItem/ServicesItem";
import ModalWindow from "../../shared/feature/ModalWindow/ModalWindow";
import {getData} from "../../services/getData";


const AccountingServicesPage = () => {
    const [data , setData ] = useState([])
    useEffect(()=> {
        getData('http://localhost:8000/api/services_list/')
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
    },[])
    return (
        <section className={css.wrapper}>
            <h1 className={css.wrapper__title}>Бухгалтерские  услуги</h1>
            <div className={css.wrapper__content}>
                <div className={css.wrapper__content_items}>
                    {
                        data.filter(item => item.category === 1).map(item => {
                            return <ServicesItem
                                id = {item.id}
                                key = {item.id}
                                name= {item.name}
                            />
                        })
                    }
                </div>

                <div className={css.wrapper__content_btns}>
                    <a target='_blank' href='https://wa.me/+996999660996' className={css.wrapper__content_btns_except}>Пакет на 1 месяц <br/>
                        (пробный период)</a>
                    <a target='_blank' href='https://wa.me/+996999660996'>Пакет на 3 месяца</a>
                    <a target='_blank' href='https://wa.me/+996999660996'>Пакет на 6 месяцев</a>
                    <a target='_blank' href='https://wa.me/+996999660996'>Пакет на 12 месяцев</a>
                </div>
            </div>
            <ModalWindow/>
        </section>
    );
};

export default AccountingServicesPage;