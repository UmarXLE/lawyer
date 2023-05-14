import React,{useState} from 'react';
import css from './Accordion.module.scss'
import plusIcon from '../../media/icons/plus.png'
import minusIcon from '../../media/icons/minus.png'
const AccordionItem = ({data}) => {
    console.log(data)
    const [open , setOpen ] = useState(false)
     return (
            <section className={css.wrapper}>
            <div className={css.wrapper__header} onClick={()=>setOpen(!open)}>
                <img src={ open ? minusIcon : plusIcon} alt="img"/>
                <p>{data[0].title}</p>
            </div>
            <div className={css.wrapper__content} style={{display: open ? 'block' : 'none'}}>
                {
                    open &&
                    <ul>
                        {
                            data[1].posts.map(item => {
                                return <li key = {item.id}>{item.descr}</li>
                            })
                        }
                    </ul>
                }
            </div>
            </section>
    );
};
export default AccordionItem;