import React from 'react'
import SectionTitles from './SectionTitles'
import ServiceCard from './ServiceCard'
import { serviceCards } from '../styles/serviceCards.module.css'

function ServicesSection() {
    return (
        <section>
            <SectionTitles title='Services we provide' />
            <div className={serviceCards}>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            </div>
        </section>
    )
}

export default ServicesSection
