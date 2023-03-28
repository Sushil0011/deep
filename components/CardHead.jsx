import React from 'react'
import style from '../styles/cardHeading.module.scss'

const CardHead = ({ headline, descripition }) => {

    const symbole = "i";

    const des = "Descripition :"
    return (

        <div className={style.cardHeading}>
            <div className={style.titlediv}>

                <h2 className={style.title} >{headline}  </h2>
                <div className={style.info}>
            <p className={style.circle}>{symbole}</p>
            </div>

            </div>

           



            <div className={style.descripition}>
                <p>

                    <span>{des}</span>{descripition}
                </p>
            </div>

        </div>
    )
}

export default CardHead