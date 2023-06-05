import React, {useEffect, useState} from 'react';

import css from './AccordinoWrapper.module.scss'

import AccordionItem from "../Accordion/AccordionItem";
import {getData} from "../../services/getData";

const AccordionWrapper = () => {
    const [data , setData ] = useState([])
    useEffect(()=> {
        getData('http://localhost:8000/api/questions_list/')
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
    },[])

    return (
        <section className={css.wrapper}>

            {
                data.map(item => {
                    return <AccordionItem
                        key = {item.id}
                        data ={item}
                        id = {item.id}
                    />
                })
            }
        </section>
    );
};
export default AccordionWrapper;