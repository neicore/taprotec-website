import React from 'react'
import { teamMember } from '../styles/teamMember.module.css'
import coder from '../images/coder.jpg'

function TeamMember() {
    return (
        <div className={teamMember}>
            <img src={coder} alt="John Doe" />
            <h3>John Doe</h3>
            <p>Fullstack Developer</p>
        </div>
    )
}

export default TeamMember
