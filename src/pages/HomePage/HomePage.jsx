import React from 'react';
import css from './HomePage.module.scss'
import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";
const HomePage = () => {
    return (
        <div className={css.wrapper}>
            <Header />
            <Intro />
        </div>
    );
};

export default HomePage;