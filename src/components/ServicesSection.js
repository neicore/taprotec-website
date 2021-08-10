import React from 'react'
import EstimationCard from './EstimationCard'
import SectionTitles from './SectionTitles'
import ServiceCard from './ServiceCard'
import { serviceCards } from '../styles/serviceCards.module.css'
import { services } from '../styles/services.module.css'

function ServicesSection() {
    return (
        <section className={services} >
            <SectionTitles title='Services we provide' />
            <div className={serviceCards}>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            </div>
            <EstimationCard />
        </section>
    )
}

export default ServicesSection
