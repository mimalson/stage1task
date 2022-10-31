import React from 'react'
import './header.css'
import ME from '../images/ME.jpg'

const header = () => {
  return (
    <header>
        <div className='header-div'>
            <img className='profile__img' src={ME} alt='profile DP'/>
            <h1 className='name'> Anjelina Jolie</h1>
        </div>
    </header>
  )
}

export default header
