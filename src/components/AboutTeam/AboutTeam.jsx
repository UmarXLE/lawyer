import React, {useEffect, useState} from "react";

import css from "./AboutTeam.module.scss";

import {getData} from "../../services/getData";


const AboutTeam = () => {
    const [data , setDate] = useState({})
    useEffect(()=>{
        getData('http://localhost:8000/api/team_list/')
            .then(res => {
                console.log(res.data[0])
                setDate(res.data[0])}
            )
            .catch(err => console.log(err))
    },[])

    return (
        <section className={css.wrapper}>
            <h1>Наша команда </h1>
            <div className={css.wrapper__content}>
                <img src={data?.image} alt="imgTeam" />
                <p>{data?.description}</p>
            </div>
        </section>
    );
};

export default AboutTeam;
