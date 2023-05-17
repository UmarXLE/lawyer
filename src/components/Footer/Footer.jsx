import React from "react";

import css from "./Footer.module.scss";

import logo from "../../media/icons/footer-logo.png";
import instagrammIcon from "../../media/icons/inst.png";
import whatsAppIcon from "../../media/icons/whats.png";
import telegramIcon from "../../media/icons/tg.png";


const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.footer__logo}>
                <img src={logo} alt="imgLogo" />
                <p>
                    АЛГОРИТМ ПРАЙМ - Порядок имеет значение <span>КОНСАЛТИНГОВАЯ КОМПАНИЯ</span>
                </p>
            </div>
            <div className={css.footer__social}>
                <p>Социальные сети</p>
                <div className={css.footer__social_container}>
                    <a target="_blank" href="https://www.instagram.com/algorithmprime/">
                        <img src={instagrammIcon} alt="imgInst" />
                    </a>
                    <a target="_blank" href="https://wa.me/+996999660996">
                        <img src={whatsAppIcon} alt="imgWhatsApp" />
                    </a>
                    <a target="_blank" href="https://web.telegram.org/k/#@semetei_ryspaev">
                        <img src={telegramIcon} alt="imgTg" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
