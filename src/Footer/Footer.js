import React from 'react'
import zuri from '../images/zuri.png'
import ingressive from '../images/ingressive.png'
import './Footer.css'

const Footer = () => {
  return (
    <div id='footer'>
       <img src={zuri}/>
       <h1>HNG Internship 9 Frontend Task</h1>
       <img src={ingressive}/>
    </div>
  )
}

export default Footer
