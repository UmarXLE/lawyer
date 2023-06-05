import React, {useEffect, useState} from 'react';

import css from './ContactPage.module.scss'

import Map from "../../components/Map/Map";
import {getData} from "../../services/getData";


const ContactPage = () => {
    const [data , setDate] = useState({})
    useEffect(()=>{
        getData('http://localhost:8000/api/contacts_list/')
            .then(res => {
                console.log(res.data[0])
                setDate(res.data[0])}
            )
            .catch(err => console.log(err))
    },[])
    return (
        <section className={css.wrapper}>
            <h1>Контактная информация:</h1>
            <div className={css.wrapper__text}>
                <h2>ОсОО «Алгоритм прайм»</h2>
                <p>Почта: <a href=''>{data?.email}</a> </p>
                <p>{data?.requisites}</p>
                <p>ИНН: {data?.inn}</p>
                <p>ОКПО: {data?.okpo}</p>
            </div>
            <Map data = {data}/>
        </section>
    );
};

export default ContactPage;