import React from 'react'
import EstimationCard from '../components/EstimationCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Projects from '../components/Projects'
import ServicesSection from '../components/ServicesSection'
import Team from '../components/Team'
import TestimonialCard from '../components/TestimonialCard'
import { main } from '../styles/main.module.css'

export default function IndexPage() {
    return (
        <main className={main}>
            <Header />
            <TestimonialCard />
            <Projects />
            <ServicesSection />
            <EstimationCard />
            <Team />
            <Footer />
        </main>
    )
}