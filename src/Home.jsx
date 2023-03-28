import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import '../styles/home.scss'
import Card1 from '../components/Card1'
import Work from '../components/Work'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import Card4 from '../components/Card4'
import Left from '../components/Left'
import Right from '../components/Right'

import tasks from './data';   
import CardHead from '../components/CardHead'
//  there was an error while fetching your api data so i created data.js file for use tthe data.

 
const Home = () => {


 console.log(tasks)

 



  return (

    <>
      <Header />

      <div className='home'>
        <Left />


        <div className='center'>

          <div >
            <span>Technical Project Management</span>
            <div className='submit'> <span>Submit task</span></div>
          </div>


          {

tasks.map((element,index)=>{
  // console.log(element.task_title)
  return(
    <div className='info'  key={index}>
    <h3>{element.task_title}</h3>
    <p  >{element.task_description}</p>
  </div>
  )
})


        
}







          

          <div className='cards_wrapper'>
          



          

            <Card1 headline="Technical Project Management" descripition="Story of Alignment Scope of Agility Specific Accountable Staggering Approach" />


            <Card2 headline="Threadbuild" descripition=" Watch the video and threadbuild, and jot out key threads while watching the video" />
            <Card3 headline="Structure your Pointers  " descripition=" Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world " />
            <Card4 headline="4SA Method" descripition="To Explore more read more " />




          </div>




        </div>



        

<Right/>



      </div>



    </>



  )
}

export default Home