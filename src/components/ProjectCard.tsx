import React from 'react'
import Button from './Button'
import { solid } from '../styles/button.module.css'
import { projectCard } from '../styles/projectCard.module.css'

function ProjectCard() {
    return (
        <section className={projectCard}>
            <img src="#" alt="Project Image" className="projectImage" />
            <div className="projectInfo">
                <h3 className="projectTitle">SMAS App</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero necessitatibus atque rerum quas voluptatibus quo iusto quaerat accusantium itaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid quos labore eum voluptatibus quasi eaque rem iusto consequuntur incidunt!</p>
                <div className="projectStack">
                    <Button name='React JS' style='solid' />
                    <Button name='Node JS' style='solid' />
                </div>
            </div>
            <Button name='Read More' style={solid} />
        </section>
    )
}

export default ProjectCard
