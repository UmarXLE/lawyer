import React from 'react';
import css from './AboutPage.module.scss'
import Header from "../../components/Header/Header";
import AboutComponents from "../../components/AboutComponents/AboutComponents";
import AboutTeam from "../../components/AboutTeam/AboutTeam";
import AboutDirector from "../../components/AboutDirector/AboutDirector";
import Footer from "../../components/Footer/Footer";

const AboutPage = () => {
    return (
        <section className={css.wrapper}>
            <Header />
            <AboutComponents />
            <AboutTeam />
            <AboutDirector />
            <Footer />
        </section>
    );
};

export default AboutPage;