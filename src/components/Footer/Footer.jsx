import React from 'react';
import css from './Footer.module.scss'
import logo from '../../media/icons/footer-logo.png'
import instagrammIcon from '../../media/icons/inst.png'
import whatsAppIcon from '../../media/icons/whats.png'
import telegramIcon from '../../media/icons/tg.png'
const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.footer__logo}>
                <img src={logo} alt=""/>
                <p>АЛГОРИТМ ПРАЙМ - Порядок имеет значение <span>
    КОНСАЛТИНГОВАЯ КОМПАНИЯ</span></p>

            </div>
            <div className={css.footer__social}>
                <p>Социальные сети</p>
                <div className={css.footer__social_container}>
                    <img src={instagrammIcon} alt=""/>
                    <img src={whatsAppIcon} alt=""/>
                    <img src={telegramIcon} alt=""/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;