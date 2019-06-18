import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Head from '../components/head'
import Layout from '../components/layout'
import ResumeSection from '../components/resumeSection'
import Project from '../components/project'

import resumeData from '../data/resumeData'
import projectData from '../data/projectData'
import resume from '../data/docs/KatzenResume.pdf'

import experienceStyles from '../styles/experience.module.scss'

const ExperiencePage = () => {
    const title = "Experience"

    const resumeSections = resumeData.map(item => 
        <ResumeSection 
            key={item.id}
            title={item.title}
            company={item.company}
            location={item.location}
            dates={item.dates}
            bullets={item.bullets}
        />
    )

    const projects = projectData.map(proj => 
        <Project key={proj.id} proj={proj}/>    
    )

    return (
        <div>
            <Layout>
                <Head title={title} />
                <h1>{title} <a href={resume} download><FontAwesomeIcon icon={["fas","download"]} size="sm" /></a></h1>
                <div className={experienceStyles.resumeWrapper} >
                    {resumeSections}
                </div>

                <br />
                <hr />

                <h1>Projects <span role="img" aria-label="computer">💻</span></h1>
                <div className={experienceStyles.projects}>
                    {projects}
                </div>                
            </Layout>
        </div>
    )
}

export default ExperiencePage