import React from 'react'

import CardHead from './CardHead'
const Card1 = ({headline,descripition}) => {
  return (
    <div  className='card'>

      <CardHead headline={headline} descripition={descripition} />
      <div>
        <img src='/image.png' alt= ""/>
      </div>

    </div>
  )
}

export default Card1