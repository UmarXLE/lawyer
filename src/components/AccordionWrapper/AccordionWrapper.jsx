import React from 'react';
import css from './AccordinoWrapper.module.scss'
import {accordion , accordionData2 , accordionData3} from "../../api/data";
import AccordionItem from "../Accordion/AccordionItem";
const AccordionWrapper = () => {
    console.log(accordion)
    return (
        <section className={css.wrapper}>
            <AccordionItem data={accordion}/>
            <AccordionItem data={accordionData2}/>
            <AccordionItem data={accordionData3}/>
        </section>
    );
};
export default AccordionWrapper;