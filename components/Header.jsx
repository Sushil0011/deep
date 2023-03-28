import React from 'react'
import style from '../styles/header.module.scss'
import NotificationsIcon from '@mui/icons-material/Notifications';
const Header = () => {
  return (
    <nav>
      <div className={style.logoContainer}>
       <img src='/logo.svg' alt='logo'/>
      </div>

      <section className={style.icons}>
        <div className={style.home}>
          <img src='/home.svg' alt="home icon" />

        </div>
        <div className={style.tool}>
          <img src='/tools.svg' alt="home icon" />

        </div>
        <div className={style.noti}>
          <NotificationsIcon style={{ color: "#FFFFFF" ,marginLeft:"3px"}} />
          <span ></span>

        </div>
        <div className={style.user}>
          <img src='/user.svg' alt="home icon" />

        </div>
        <div className={style.menu}>
          <span></span>
          <span></span>
          <span></span>


        </div>
    
      </section>

    </nav>
  )
}

export default Header