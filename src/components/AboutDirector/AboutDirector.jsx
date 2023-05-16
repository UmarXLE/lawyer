import React from "react";

import css from "./AboutDirector.module.scss";

import iconDirector from "../../media/images/about-director.png";
const AboutDirector = () => {
    return (
        <section className={css.wrapper}>
            <h1>Информация о руководстве</h1>
            <div className={css.wrapper__content}>
                <div className={css.wrapper__content_text}>
                    <h2>Рыспаев Семетей Муратович</h2>
                    <p>
                        <strong> Генеральный директор ОсОО «Алгоритм прайм»</strong>
                    </p>
                    <p>
                        Магистр юриспруденции опыт работы более 5 лет в юридической сфере, бизнес-консультант, эксперт по систематизации и
                        автоматизации бизнес-процессов, тренер по финансовой грамотности, эксперт по ораторскому искусству.
                    </p>
                </div>
                <img src={iconDirector} alt="imgDirector" />
            </div>
        </section>
    );
};

export default AboutDirector;
