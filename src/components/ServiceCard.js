import React from 'react'
import Button from './Button'
import { readMore } from '../styles/button.module.css'
import { serviceCard } from '../styles/serviceCard.module.css'
import serviceImage from '../images/website-design.png'

function ServiceCard() {
    return (
        <section className={serviceCard}>
            <img src={serviceImage} alt="Service" width="240.1px" height="184.88px" />
            <h3>Web Designing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem doloremque eius, necessitatibus error aperiam reiciendis voluptate aliquid placeat obcaecati.</p>
            <Button name='Read More' style={readMore} />
        </section>
    )
}

export default ServiceCard
