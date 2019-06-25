import React from 'react'

import resumeStyles from '../styles/resumeSection.module.scss'

const ResumeSection = (props) => {
    var idx = 1
    const bullets = props.bullets.map(bullet => <li key={idx++}>{bullet}</li>)

    return (
        <div className={resumeStyles.section}>
            <div className={resumeStyles.columnMedium}>
                <h3>{props.company}</h3>
                <p>{props.title} | <em>{props.location}</em></p>
                <p>{props.dates}</p>
            </div>
            <div className={resumeStyles.columnLarge}>
                <ul>
                    {bullets}
                </ul>
            </div>
        </div>
    )
}

export default ResumeSection