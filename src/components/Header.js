import React from 'react'
import Button from './Button'
import Navbar from './Navbar'
import { header, headerContent } from '../styles/header.module.css'
import { solid, outline } from '../styles/button.module.css'

function Header() {
    return (
        <header className={header} >
            <Navbar />

            <section className={headerContent}>
                <h1>We build fast, responsive, and innovative
                    modern solutions for web and mobile
                </h1>

                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                    ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
                </p>

                <div>
                    <Button name='See Our Works' style={solid}/>
                    <Button name='Get In Touch' style={outline}/>
                </div>
            </section>
        </header>
    )
}

export default Header
