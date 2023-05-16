import React from "react";
import {Link} from "react-router-dom";

import css from "./Menu.module.scss";


const Menu = ({isOpen, onClose}) => {
    return (
        <section className={isOpen ? css.menu__animation : css.menu}>
            <nav className={css.menu__nav}>
                <Link to="/" onClick={() => onClose()}>
                    Главная
                </Link>
                <Link to="/about" onClick={() => onClose()}>
                    О нас
                </Link>
                <Link to="/legalservice" onClick={() => onClose()}>
                    Услуги
                </Link>
                <Link to="/contact" onClick={() => onClose()}>
                    Контакты
                </Link>
            </nav>
            <button className={css.menu__close} onClick={() => onClose()} />
        </section>
    );
};

export default Menu;
