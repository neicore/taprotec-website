import React from 'react'
import Button from './Button'
import { solid } from '../styles/button.module.css'
import { estimationCard } from '../styles/estimationCard.module.css'

function EstimationCard() {
    return (
        <section className={estimationCard}>
            <h2>Do you have a project in mind?</h2>
            <p>Contact us now to estimate development time and cost of your project!</p>
            <Button name='Estimate A Project' style={solid}/>
        </section>
    )
}

export default EstimationCard
