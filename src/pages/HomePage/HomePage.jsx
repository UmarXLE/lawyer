import React from 'react';
import css from './HomePage.module.scss'
import Intro from "../../components/Intro/Intro";
import ServicesBlog from "../../shared/feature/ServicesBlog/ServicesBlog";
import AccordionItem from "../../components/Accordion/AccordionItem";
import AccordionWrapper from "../../components/AccordionWrapper/AccordionWrapper";
const HomePage = () => {
    return (
        <div className={css.wrapper}>
            <Intro />
            <ServicesBlog />
            <AccordionWrapper />
        </div>
    );
};

export default HomePage;