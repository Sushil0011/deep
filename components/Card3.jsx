import React from 'react'
import style from '../styles/card3.module.scss'

import CardHead from './CardHead'
const Card3 = ({ headline, descripition }) => {
  return (
    <div className='card'>

      <CardHead headline={headline} descripition={descripition} />
      <div>
      </div>


      <main className={style.wrapper}>
        <section className={style.title}>
          <span>Title</span>
          <input type="text" />
        </section>


        <section className={style.content}>

          <span>Content</span>
          <div>
            <ul>
              <li>File</li>
              <li>Edit</li>
              <li>View</li>
              <li>Inset</li>
              <li>Format</li>
              <li>Tools</li>
              <li>Table</li>
              <li>Help</li>

            </ul>
            <div className={style.toolsWrapper}>

          
                <img src='/turnleft.svg' alt="" />
                <img src='/turnright.svg' alt="" />

              

            
                <img src="/resize.svg" at="" />
              

              
                <span>Paragraph</span>

            
              <div className={style.dots}>
                <span></span><span></span>
                <span></span>
              </div>
            </div>


          </div>
        </section>

        <textarea >

        </textarea>

      </main>

    </div>
  )
}

export default Card3