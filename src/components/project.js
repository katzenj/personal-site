import React from 'react'

import projectStyles from '../styles/project.module.scss'

const Project = (props) => {
    const imgData = props.proj.image.class === "beertender" ? props.imgData.beertenderImg : props.imgData.todoImg

    return (
        <div className={projectStyles.project}>
            <h3><a href={props.proj.link} target="_blank" rel="noopener noreferrer">{props.proj.title}</a></h3>
            <img className={props.proj.image.class} srcSet={imgData.childImageSharp.sizes.srcSet} alt={props.proj.image.alt} />
            <div dangerouslySetInnerHTML={{ __html: props.proj.details }}></div>
        </div>
    )
}

export default Project