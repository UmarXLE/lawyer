import React from "react";

import css from "./ServicesItem.module.scss";


const ServicesItem = ({name}) => {
    return <li className={css.li}>{name}</li>;
};

export default ServicesItem;
