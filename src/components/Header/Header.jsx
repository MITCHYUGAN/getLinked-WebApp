import { useState } from 'react'
import logo from './assets/logo.png'
import { Link } from "react-scroll"
import { NavLink } from 'react-router-dom'
import x from "./assets/x.png"
import menu from "./assets/menu.png"

// eslint-disable-next-line react/prop-types
const Header = () => {

    const [ openNav, setOpenNav ] = useState("nav")

    const [ headerBackground, setHeaderBackground ] = useState('header')

    const changeBackground = () =>{
        if (window.scrollY >= 30) {
            setHeaderBackground('headerBackgroundActive')
        } else {
            setHeaderBackground('header')
        }
    }

    window.addEventListener("scroll", changeBackground)

    return(
        <header className={`header ${headerBackground}`}>
            <div className='headerWrapper'>
                    <a href='/' className='logo' >
                        <img src={logo} alt="My Logo"/>
                    </a>
                    <nav>
                        <ul>
                            <Link className='navlinks' to="timeline" spy={true} smooth={true} offset={50} duration={500}>Timeline</Link>
                            <Link to='overview' className='navlinks' spy={true} smooth={true} offset={50} duration={500}>Overview</Link>
                            <Link to='faq' className='navlinks' spy={true} smooth={true} offset={50} duration={500}>FAQs</Link>
                            <NavLink to='/contact' className='navlinks' activeClassName="activebtn">Contact</NavLink>
                        </ul>
                        <NavLink to='/register' className='button' >
                            Register
                        </NavLink>
                     </nav>

                     <nav className={`nav ${openNav}`}>
                        <ul>
                            <Link to="timeline" onClick={() => setOpenNav("nav")} className='navlinks' spy={true} smooth={true} offset={50} duration={500}>Timeline</Link>
                            <Link to='overview' onClick={() => setOpenNav("nav")} className='navlinks' spy={true} smooth={true} offset={50} duration={500}>Overview</Link>
                            <Link to='faq' onClick={() => setOpenNav("nav")} className='navlinks' spy={true} smooth={true} offset={50} duration={500}>FAQs</Link>
                            <a href='/contact' className='navlinks'>Contact</a>
                        </ul>
                        <a href='/register' className='button'>Register</a>
                    </nav>
                    { 
                    openNav === "nav" ? 
                     <img onClick={() => setOpenNav("navOpen")} className='navControl' src={menu} alt="" /> 
                     :
                     <img onClick={() => setOpenNav("nav")} className='navControl' src={x} alt="Cancel Button" />
                    }
            </div>
        </header>
    )
}

export default Header

