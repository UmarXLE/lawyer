import React,{useState} from 'react';

import css from './Accordion.module.scss'

import plusIcon from '../../media/icons/plus.png'
import minusIcon from '../../media/icons/minus.png'


const AccordionItem = ({data}) => {
    const [open , setOpen ] = useState(false)
     return (
            <div className={css.wrapper}>
            <div className={css.wrapper__header} onClick={()=>setOpen(!open)}>
                <img src={ open ? minusIcon : plusIcon} alt="img"/>
                <p>{data?.question}</p>
            </div>
            <div className={css.wrapper__content} style={{display: open ? 'block' : 'none'}}>
                <li>{data?.answer}</li>
            </div>
            </div>
    );
};
export default AccordionItem;