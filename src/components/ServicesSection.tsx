import React from 'react'
import SectionTitles from './SectionTitles'
import ServiceCard from './ServiceCard'

function ServicesSection() {
    return (
        <section>
            <SectionTitles title='Services we provide' />
            <div>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            </div>
        </section>
    )
}

export default ServicesSection
