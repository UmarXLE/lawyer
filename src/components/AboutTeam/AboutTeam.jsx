import React from "react";
import css from "./AboutTeam.module.scss";
import iconTeam from "../../media/images/about-team.png";

const AboutTeam = () => {
    return (
        <section className={css.wrapper}>
            <h1>Наша команда </h1>
            <div className={css.wrapper__content}>
                <img src={iconTeam} alt="imgTeam" />
                <p>Мы — команда специалистов, которая решит все ваши вопросы самым комфортным и практичным способом.</p>
            </div>
        </section>
    );
};

export default AboutTeam;
