import React from 'react'
import SectionTitles from '../components/SectionTitles'
import ProjectCard from '../components/ProjectCard'
import { projectCards } from '../styles/projects.module.css'

function Projects() {
    return (
        <section>
            <SectionTitles title='Works we have done' />
            <div className={projectCards}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <p className="readMoreProjects">Read More Projects <i>Icon</i></p>
        </section>
    )
}

export default Projects
