import React from 'react';
import css from './AboutTeam.module.scss'
import iconDirector from '../../media/images/about-team.png'

const AboutTeam = () => {
    return (
        <section className={css.wrapper}>
            <h1>Наша команда  </h1>
            <div className={css.wrapper__content}>
                <div className={css.wrapper__content_img}>
                    <img src={iconDirector} alt=""/>
                </div>
                <div className={css.wrapper__content_text}>
                    <p>Мы — команда специалистов, которая решит все ваши вопросы самым комфортным и практичным способом.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;