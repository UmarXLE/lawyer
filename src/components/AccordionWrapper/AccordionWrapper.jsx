import React from 'react';
import css from './AccordinoWrapper.module.scss'
import {accordion} from "../../api/data";
import AccordionItem from "../Accordion/AccordionItem";
const AccordionWrapper = () => {
    console.log(accordion)
    return (
        <section className={css.wrapper}>
            <AccordionItem props={accordion}/>
        </section>
    );
};

export default AccordionWrapper;