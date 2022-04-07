import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Link to="/">
        <img src="/images/logo.png" alt="Star Wars" className={style.logo}/>
      </Link>
      <div className={style.watermark}>
        <div className={style.cinema}>
          Bimo
        </div>
        <div className={style.xxi}>
          XXI
        </div>
      </div>
    </>
  )
}

export default Header