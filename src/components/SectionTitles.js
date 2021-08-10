import React from 'react'
import { sectionTitle } from '../styles/sectionTitle.module.css'

function SectionTitles({title}) {
    return (
        <h2 className={sectionTitle} >{title}</h2>
    )
}

export default SectionTitles
