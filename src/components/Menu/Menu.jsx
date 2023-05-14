import React, {useContext} from 'react';
import css from './Menu.module.scss'
import {Link} from "react-router-dom";
import {CustomContext} from "../../utils/Context";
const Menu = () => {
    const {open , setOpen } = useContext(CustomContext)
    return (
        <section className={css.menu}>
            <nav className={css.menu__nav}>
                <Link to='/about'>О нас</Link>
                <Link to='/legalservice'>Услуги</Link>
                <Link to='/contact'>Контакты</Link>
            </nav>
            <button onClick={()=>setOpen(!open)} className={css.menu__close}></button>
        </section>
    );
};

export default Menu;