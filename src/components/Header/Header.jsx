import React from 'react'
import css from './Header.module.scss'
import {Link} from "react-router-dom"
import logo from '../../media/icons/logo.png'

function Header(props) {
    return (
        <header className={css.header}>
            <div className={css.header__logo}>
                <img src={logo} alt=""/>
            </div>
            <nav className={css.header__nav}>
                <Link to='/about'>О нас</Link>
                <Link to='/service'>Услуги</Link>
                <Link to='/contact'>Контакты</Link>
            </nav>
        </header>
    );
}

export default Header;