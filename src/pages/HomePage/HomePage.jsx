import React from 'react';
import css from './HomePage.module.scss'
import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";
import ServicesBlog from "../../shared/feature/ServicesBlog/ServicesBlog";
const HomePage = () => {
    return (
        <div className={css.wrapper}>
            <Header />
            <Intro />
            <ServicesBlog />
        </div>
    );
};

export default HomePage;