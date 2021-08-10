import React from 'react'
import SectionTitles from './SectionTitles'
import ProjectCard from '../components/ProjectCard'
import { projectCard, projectCards } from '../styles/projects.module.css'

function Projects() {
    return (
        <section className={projectCard}>
            <SectionTitles title='Works we have done' />
            <div className={projectCards}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}

export default Projects
