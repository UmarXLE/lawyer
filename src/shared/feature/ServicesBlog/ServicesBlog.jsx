import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import css from "./ServicesBlog.module.scss";

import icon1 from "../../../media/images/services-blog-1.png";
import icon2 from "../../../media/images/services-blog-2.png";
import {getData} from "../../../services/getData";


const ServicesBlog = () => {
    const [data , setDate] = useState({})
    useEffect(()=>{
        getData('http://localhost:8000/api/categories_list/')
            .then(res => {
                console.log(res.data[0])
                setDate(res.data)}
            )
            .catch(err => console.log(err))
    },[])

    return (
        <div id="service" className={css.wrapper}>
            <Link to='/accountingservice' className={css.wrapper__item}>
                <h1>{data[0]?.name} </h1>
                <img src={data[0]?.image} alt="imgIcon" />
            </Link>
            <Link to="/legalservice" className={css.wrapper__item}>
                <h1>{data[1]?.name} </h1>
                <img src={data[1]?.image} alt="imgIcon" />
            </Link>
        </div>
    );
};

export default ServicesBlog;
