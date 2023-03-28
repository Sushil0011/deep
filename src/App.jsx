import React from 'react'
import Home from './Home'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel'
import Home2 from './Home2';

const App = () => {
  return (
    <>

    <Carousel    showThumbs={false}>
    
    <Home/>
    <Home2/>
    </Carousel>
    
    </>
  )
}

export default App