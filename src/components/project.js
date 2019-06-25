import React from 'react'

import projectStyles from '../styles/project.module.scss'

const Project = (props) => {
    const title = props.proj.image.class === "beertender" ? <h3><a href="https://itunes.apple.com/us/app/beertenderatx/id1457719717" target="_blank" rel="noopener noreferrer">{props.proj.title}</a></h3> : <h3>{props.proj.title}</h3>

    const imgData = props.proj.image.class === "beertender" ? props.imgData.beertenderImg : props.imgData.todoImg

    return (
        <div className={projectStyles.project}>
            {title}
            <img className={props.proj.image.class} srcSet={imgData.childImageSharp.sizes.srcSet} alt={props.proj.image.alt} />
            <div dangerouslySetInnerHTML={{ __html: props.proj.details }}></div>
        </div>
    )
}

export default Project