import React from 'react'
import Button from './Button'
import { stackButtonReact, stackButtonNode, readMore } from '../styles/button.module.css'
import { projectCard, projectInfo, projectTitle, projectStack } from '../styles/projectCard.module.css'
import projectImage from '../images/project.png'

function ProjectCard() {
    return (
        <section className={projectCard}>
            <img src={projectImage} alt="Project" />
            <div className={projectInfo}>
                <h3 className={projectTitle}>SMAS App</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero necessitatibus atque rerum quas voluptatibus quo iusto quaerat accusantium itaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid quos labore eum voluptatibus quasi eaque rem iusto consequuntur incidunt!</p>
                <div className={projectStack}>
                    <Button name='React JS' style={stackButtonReact} />
                    <Button name='Node JS' style={stackButtonNode} />
                </div>
            </div>
            <Button name='Read More' style={readMore} />
        </section>
    )
}

export default ProjectCard
