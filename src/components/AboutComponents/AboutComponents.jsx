import React from 'react';
import css from './AboutComponents.module.scss'
import iconAbout from '../../media/images/about-1.png'
const AboutComponents = () => {
    return (
        <section className={css.wrapper}>
            <h1>О нас </h1>
            <div className={css.wrapper__content}>
                <div className={css.wrapper__content_text}>
                    <p>Компания Algorithm Prime (ОсОО «Алгоритм прайм») - это многопрофильная компания, успешно осуществляющая свою деятельность в сфере бухгалтерских, налоговых, и юридических услуг.</p>
                    <p>Компания основана в 2021 году и порекомендовала себя как один из высококачественных консалтинговых компании на рынке</p>
                    <p>Мы осуществляем весь спектр бухгалтерских услуг, начиная от мини-аудита до сдачи всех отчетов любой сложности</p>
                </div>
                <div className={css.wrapper__content_img}>
                    <img src={iconAbout} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default AboutComponents;