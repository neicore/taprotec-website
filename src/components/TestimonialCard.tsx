import React from 'react'
import SectionTitles from './SectionTitles'
import Testimonial from './Testimonial'
import { testimonialCard } from '../styles/testimonialCard.module.css'

function TestimonialCard() {
    return (
        <section className={testimonialCard}>
            <SectionTitles title='What our clients say about us'/>
            <Testimonial/>
        </section>
    )
}

export default TestimonialCard
