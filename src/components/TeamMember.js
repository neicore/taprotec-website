import React from 'react'
import { teamMember } from '../styles/teamMember.module.css'

function TeamMember() {
    return (
        <div className={teamMember}>
            <img src="#" alt="John Doe" />
            <h3>John Doe</h3>
            <p><i>Fullstack Developer</i></p>
        </div>
    )
}

export default TeamMember
