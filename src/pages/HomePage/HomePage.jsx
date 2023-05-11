import React from 'react';
import css from './HomePage.module.scss'
import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";
import ServicesBlog from "../../shared/feature/ServicesBlog/ServicesBlog";
import Footer from "../../components/Footer/Footer";
import AccordionItem from "../../components/Accordion/AccordionItem";
const HomePage = () => {
    return (
        <div className={css.wrapper}>
            <Header />
            <Intro />
            <ServicesBlog />
            <AccordionItem />
            <Footer/>
        </div>
    );
};

export default HomePage;