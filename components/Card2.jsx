import React from 'react'
import style from '../styles/card2.module.scss'

import CardHead from './CardHead'
const Card2 = ({ headline, descripition }) => {
    return (
        <div className='card'>

            <CardHead headline={headline} descripition={descripition} />
            

                <div className={style.thread}>
<span  className={style.imageWrap}>                    <img src="arrowup.svg" alt=""  className={style.arrowup}/>
</span>
                    <span>Thread A</span>
                 </div>


                <section className={style.subthread_wrapper}>
                    <div className={style.subthread}>
                        <div className={style.inner}><span>Sub thread 1</span></div>
                        <textarea placeholder='Enter Text here'  style={{ resize: "none" }}   className={style.outer}></textarea>

                    </div>

                    <div className={style.subthread}>
                        <div className={style.inner}><span>Sub Interpretation 1</span></div>
                        <textarea placeholder='Enter Text here'  style={{ resize: "none" }}   className={style.outer}></textarea>


                    </div>

                </section>

                <section className={style.category}>

                    <div className={style.icons}>

                        <img src='/idea.svg' alt="" />
                        <img src='/msg.svg' alt="" />
                        <img src='/q.svg' alt="" />
                        <img src='/d.svg' alt="" />


                    </div>


                    <section className={style.buttonWrapper}>
                        <button>
                            <p> Select Categ</p>

                            <img src='/arrowdown.svg' alt='' />
                        </button>
                        <button>
                            <p>Select Proces</p>
                            <img src='/arrowdown.svg' alt='' />

                        </button>
                    </section>

                </section>

                <div className={style.submitthread}>
                    <img src='/plus.svg' style={{
                        width: "8.82px", height: "20.07px"
                    }} alt="" /> <p>Sub-thread</p>
                </div>

                <section className={style.summary}>

                    <div className={style.s_heading}>
                        <span>Summary for Thread A</span></div>
                    <textarea placeholder='Enter Text here' className={style.s_input} style={{ resize: "none" }}  ></textarea>
                </section>
            </div>

        
    )
}

export default Card2