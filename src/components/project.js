import React from 'react'

import beertender from '../data/images/Beertender.png'
import todo from '../data/images/ToDo_Home.jpeg'

import projectStyles from '../styles/project.module.scss'

const Project = (props) => {
    const image = props.proj.image.class === "beertender" ? beertender : todo
    const title = props.proj.image.class === "beertender" ? <h3><a href="https://itunes.apple.com/us/app/beertenderatx/id1457719717" target="_blank" rel="noopener noreferrer">{props.proj.title}</a></h3> : <h3>{props.proj.title}</h3>
    return (
        <div className={projectStyles.project}>
            {title}
            <img className={props.proj.image.class} src={image} alt={props.proj.image.alt} />
            <div dangerouslySetInnerHTML={{ __html: props.proj.details }}></div>
        </div>
    )
}

export default Project