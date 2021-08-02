import React from 'react'
import { Link } from 'gatsby'
import {navbar, navbarMenu, navbarMenuItemActive, navbarIcons} from '../styles/navbar.module.css'

function Navbar() {
    return (
        <nav className={navbar} >
            <img src="" alt="Taprotec Logo" />

            <ul className={navbarMenu}>
                <li><a className={navbarMenuItemActive} href='#'>Home</a></li>
                <li><a href='#'>Porfolio</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Team</a></li>
                <li><Link to='#'>Contact Us</Link></li>
            </ul>

            <ul className={navbarIcons}>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    )
}

export default Navbar
