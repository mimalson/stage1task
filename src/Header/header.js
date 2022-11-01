import React from 'react'
import './header.css'
import ME from '../images/ME.jpg'
import MENU from '../images/.MENU/jpg'

const header = () => {
  return (
    <header>
        <div id='menu'>
            <img className='menus' src={MENU} alt='profile DIP'/>
        <div className='header-div'>
            <img className='profile__img' src={ME} alt='profile DP'/>
            <h1 className='name'> Anjelina Jolie</h1>
        </div>
    </header>
  )
}

export default header
