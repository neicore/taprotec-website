import React from 'react'
import Button from './Button'
import { solid } from '../styles/button.module.css'
import { serviceCard } from '../styles/serviceCard.module.css'

function ServiceCard() {
    return (
        <section className={serviceCard}>
            <img src="#" alt="Service image" />
            <h3>Web Designing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem doloremque eius, necessitatibus error aperiam reiciendis voluptate aliquid placeat obcaecati.</p>
            <Button name='Read More' style={solid} />
        </section>
    )
}

export default ServiceCard
