import React from 'react'
import style from "../styles/right.module.scss"
import Work from './Work'
const Right = () => {
  return (
    <aside className={style.rightWrapper}>
          <div className={style.right}>

            <div className={style.notice}>
              <img src='/close.svg' alt="" />
              <span >Notice Board</span>
            </div>
          </div>


          <div className={style.workContainer} >
            <Work image='/question.svg' h="40px" w="37px" />
            <Work image='/meeting.svg' h="40px" w="40px" />
            <Work image='/schedule.svg' h="50px" w="50px" />

          </div>
        </aside> 
  )
}

export default Right