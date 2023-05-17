import React from 'react';

import css from './ModalWindow.module.scss'

import icon1 from '../../../media/icons/modal-1.png'
import icon2 from '../../../media/icons/modal-2.png'


const ModalWindow = () => {
    return (
        <section className={css.wrapper}>
                <h1 className={css.wrapper__title}>КОНСУЛЬТАЦИЯ</h1>
                <div className={css.wrapper__btnContainer}>
                    <a target='_blank' href='https://wa.me/+996999660996'>ОФОРМИТЬ ЗАПИСЬ </a>
                </div>
            <img className={css.wrapper_img1} src={icon1} alt="imgIcon"/>
            <img className={css.wrapper_img2} src={icon2} alt="imgIcon"/>
        </section>
    );
};

export default ModalWindow;