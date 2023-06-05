import React, {useEffect, useState} from "react";

import css from "./AboutDirector.module.scss";

import iconDirector from "../../media/images/about-director.png";
import {getData} from "../../services/getData";


const AboutDirector = () => {
    const [data , setDate] = useState({})
    useEffect(()=>{
        getData('http://localhost:8000/api/information_list/')
            .then(res => {
                console.log(res.data[0])
                setDate(res.data[0])}
            )
            .catch(err => console.log(err))
    },[])
    return (
        <section className={css.wrapper}>
            <h1>Информация о руководстве</h1>
            <div className={css.wrapper__content}>
                <div className={css.wrapper__content_text}>
                    <h2>{data.name}</h2>
                    <p>
                        <strong> {data.position}</strong>
                    </p>
                    <p>
                        {data.description}
                    </p>
                </div>
                <img src={data.image} alt="imgDirector" />
            </div>
        </section>
    );
};

export default AboutDirector;
