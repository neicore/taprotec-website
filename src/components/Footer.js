import React from 'react'
import { footer, footerIcons, footerMenu, copyright } from '../styles/footer.module.css'

function Footer() {
    return (
        <footer className={footer}>
            <div className={footerIcons}>
                <i>Icon</i>
                <i>Icon</i>
                <i>Icon</i>
            </div>

            <ul className={footerMenu}>
                <li>Company</li>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>

            <p className={copyright}>Copyright &copy; 2021 Taprotec</p>
        </footer>
    )
}

export default Footer
