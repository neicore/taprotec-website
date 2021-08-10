import React from 'react'
import SectionTitles from './SectionTitles'
import TeamMember from './TeamMember'
import { team,teamMembers } from '../styles/teamMembers.module.css'

function Team() {
    return (
        <section className={team} >
            <SectionTitles title='Meet the team' />
            <div className={teamMembers}>
                <TeamMember />
                <TeamMember />
                <TeamMember />
                <TeamMember />
            </div>
        </section>
    )
}

export default Team
