import React from "react";

import css from "./AboutPage.module.scss";

import AboutComponents from "../../components/AboutComponents/AboutComponents";
import AboutTeam from "../../components/AboutTeam/AboutTeam";
import AboutDirector from "../../components/AboutDirector/AboutDirector";

const AboutPage = () => {
    return (
        <section className={css.wrapper}>
            <AboutComponents />
            <AboutTeam />
            <AboutDirector />
        </section>
    );
};

export default AboutPage;
