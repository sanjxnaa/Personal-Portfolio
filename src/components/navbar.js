import React,{useState} from 'react'
import './navbar.css';
import img3 from '../assets/img3.png';
import contact from '../assets/contact.png'
import { Link } from 'react-scroll';
import menu from '../assets/menu.png';

const Navbar= () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={img3} alt="Logo" className='logo' />
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            <Link activeClass='active' to='certificates' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Certfications</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contact} alt='contact' className='desktopMenuImg' />Contact Me</button>
            
        <img src={menu} alt="menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='certificates' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Certfications</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar