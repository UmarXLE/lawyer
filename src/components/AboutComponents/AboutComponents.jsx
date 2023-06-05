import {useEffect, useState} from 'react';

import css from './AboutComponents.module.scss'

import iconAbout from '../../media/images/about-1.png'

import axios from 'axios'
import {getData} from "../../services/getData";


const AboutComponents = () => {
    const [data , setDate] = useState({})
    useEffect(()=>{
        getData('http://localhost:8000/api/aboutus_list/')
            .then(res => {
                console.log(res.data[0])
                setDate(res.data[0])}
            )
            .catch(err => console.log(err))
    },[])

    return (
        <section className={css.wrapper}>
            <h1>О нас </h1>
            <div className={css.wrapper__content}>
                <div className={css.wrapper__content_text}>
                    <p>{data.description}</p>
                </div>
                <div className={css.wrapper__content_img}>
                    <img src={data.image} alt="imgabout"/>
                </div>
            </div>
        </section>
    );
};

export default AboutComponents;