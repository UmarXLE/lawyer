import React from 'react';
import css from './ServicesItem.module.scss'

const ServicesItem = ({descr}) => {
    return (
        <li>
            {descr}
        </li>
    );
};

export default ServicesItem;