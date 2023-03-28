import React from 'react'
import style from '../styles/card4.module.scss'

import CardHead from './CardHead'
const Card4 = ({ headline, descripition }) => {
  return (
    <div className='card'>

      <CardHead headline={headline} descripition={descripition} />

      <div className={style.Wrapper}>

        <div className={style.intro}>
          <div>
            <img src="/arrowup.svg" alt="" />
          </div>
          <span>
            Introduction
          </span>
        </div>


        <section className={style.intromsg}>
          <p>
            The 4SA Method , How to bring a idea into progress ?
          </p>
        </section>
        <div className={style.seeMoreBox}>
          <p>See More</p>
        </div>


        <div className={style.threadA}>
          <div>
            <img src="/arrowup.svg" alt="" />
          </div>
          <span>
            Thread A
          </span>
        </div>

        <div className={style.threadAmsg}>

          <p>
            How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?
          </p>
        </div>
        <div className={style.threadSeeMore}>
          <p>See More</p>
        </div>



        <div className={style.example}>
          <span>
          Example 1
          </span>
        </div>


        <p  className={style.exampleMsg}>
        You have a concept , How will you put into progress?
        </p>

      </div>





    </div>
  )
}

export default Card4