import React, {useState} from "react";
import {Link} from "react-router-dom";

import css from "./Header.module.scss";

import logo from "../../media/icons/logo.png";

import Menu from "../Menu/Menu";


function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={css.header}>
            <Link to="/" className={css.header__logo}>
                <img src={logo} alt="logo" />
            </Link>
            <nav className={css.header__nav}>
                <Link to="/about">О нас</Link>
                <Link to="/legalservice">Услуги</Link>
                <Link to="/contact">Контакты</Link>
            </nav>
            <div onClick={() => setIsOpen(true)} className={css.header__burger}></div>
            {isOpen && <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </header>
    );
}

export default Header;
