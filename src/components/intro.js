import React from 'react'
import './intro.css'
import {Button, Link} from 'react-scroll';
import hireme from '../assets/hireme.png'
import bg from '../assets/image.png'

const Intro = () => {
    return (
      <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Sanjana Gowda</span><br/>AI - Data Science Enthusiast</span>
            <p className='introPara'>A skilled front-end web designer with a passion for AI and Data Science. I have worked on numerous<br /> projects, to develop my knowledge and constantly learn more about my subject of study.</p>
            <Link><Button className='btn'><img src={hireme} alt="Hire me" className='btnImg'/>Hire Me</Button></Link>
        </div>
        <img src={bg} alt='profile' className='bg' />
      </section>
    )
}

export default Intro;