import React from "react";

import css from "./Map.module.scss";

import adressIcon from "../../media/icons/address.png";
import callIcon from "../../media/icons/call.png";
import MapAPI from "../MapAPI/MapAPI";

const Map = ({data}) => {
    return (
        <section className={css.wrapper}>
            <div className={css.wrapper__text}>
                <div className={css.wrapper__text_title}>
                    <img src={adressIcon} alt="imgAdress" />
                    <p>Адрес</p>
                </div>
                <p className={css.wrapper__text_descr}>{data?.address}</p>
                <div className={css.wrapper__text_subTitle}>
                    <img src={callIcon} alt="imgCall" />
                    <div className={css.wrapper__text_subTitle_container}>
                        <h2>Телефон номер </h2>
                        <a target="_blank" href="">
                            {data?.phone}
                        </a>
                    </div>
                </div>
                <a target="_blank" href="" className={css.mobile_wrapper__text_descr}>
                    {data?.phone}
                </a>
            </div>
            <div className={css.wrapper__map}>
                <MapAPI />
            </div>
        </section>
    );
};
export default Map;
