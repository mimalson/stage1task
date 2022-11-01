import React from 'react'
import slack from '../images/slack.png';
import github from '../images/github.png'
import './Bottom.css'

const Bottom = () => {
  return (
    <div id='bottom'>
       <img src={slack} alt='slack'/>
       <img src={github} alt='git'/>
    </div>
  )
}


export default Bottom
