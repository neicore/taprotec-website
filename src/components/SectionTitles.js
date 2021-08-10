import React from 'react'
import { sectionTitle } from '../styles/sectionTitle.module.css'

function SectionTitles(props: {title: string}) {
    return (
        <h2 className={sectionTitle} >{props.title}</h2>
    )
}

export default SectionTitles
