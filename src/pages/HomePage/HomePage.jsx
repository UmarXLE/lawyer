import React from 'react';
import css from './HomePage.module.scss'
import Header from "../../components/Header/Header";
const HomePage = () => {
    return (
        <div className={css.wrapper}>
            <Header />
        </div>
    );
};

export default HomePage;