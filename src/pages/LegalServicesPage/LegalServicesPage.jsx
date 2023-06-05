import React, {useEffect, useState} from 'react';

import {legalServices} from "../../api/data";
import css from './LegalServicesPage.module.scss'
import ServicesItem from "../../shared/feature/ServicesItem/ServicesItem";
import ModalWindow from "../../shared/feature/ModalWindow/ModalWindow";
import {getData} from "../../services/getData";


const LegalServicesPage = () => {
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
            <h1>Юридические услуги</h1>
            <div className={css.wrapper__content}>
                <ul className={css.wrapper__content_items}>
                    {
                        data.filter(item => item.category === 2).map(item => {
                            return <ServicesItem
                                name={item.name}
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