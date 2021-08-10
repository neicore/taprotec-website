import React from 'react'
import { Link } from 'gatsby'
import { FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa'
import { navbar, navbarMenu, navbarMenuItemActive, navbarIcons } from '../styles/navbar.module.css'
// import taprotecLogo from '../images/taprotec-logo.png'

function Navbar() {
    return (
        <nav className={navbar} >
            {/* <img src={taprotecLogo} alt="Taprotec Logo" /> */}

            <ul className={navbarMenu}>
                <li><a className={navbarMenuItemActive} href='#'>Home</a></li>
                <li><a href='#'>Porfolio</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Team</a></li>
                <li><Link to='#'>Contact Us</Link></li>
            </ul>

            <ul className={navbarIcons}>
                <li><FaWhatsapp title='WhatsApp' size='30px' /></li>
                <li><FaInstagram title='Instagram' size='30px' /></li>
                <li><FaGithub title='Github' size='30px' /></li>
            </ul>
        </nav>
    )
}

export default Navbar
