import React from 'react'

const Center = () => {
  return (
    
    <div className='center'>

    <div >
      <span>Technical Project Management</span>
      <div  className='submit'>  <span>Submit task</span></div>
    </div>



    <div className='info'>
      <h3>Explore the world of management</h3>
      <p>As a project manager, you play an important reole in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?</p>
    </div>







    {/* cards Wrapper*/}

    <div className='cards_wrapper'>


      <Card1 headline="Technical Project Management" descripition="Story of Alignment Scope of Agility Specific Accountable Staggering Approach" />


      <Card2 headline="Threadbuild" descripition=" Watch the video and threadbuild, and jot out key threads while watching the video" />
      <Card3 headline="Structure your Pointers  " descripition=" Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world " />
      <Card4 headline="4SA Method" descripition="To Explore more read more " />




    </div>




  </div>

  )
}

export default Center