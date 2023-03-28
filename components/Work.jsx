import React from 'react'
import style from '../styles/work.module.scss'
const Work = ({image,h,w}) => {
  return (
    <div className={style.work}> 
        
      <img src={image} alt=""   style={{height:h ,  width:w}}/>  

      
        </div>
  )
}

export default Work