import React from 'react'

import Head from '../components/head'
import Layout from '../components/layout'
import me from '../data/images/me.jpeg'

import aboutStyles from '../styles/about.module.scss'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About" />
                <div className={aboutStyles.aboutContent}>
                    <div className={aboutStyles.column}>
                        <div className="about-pic">
                            <img src={me} alt="Me in Vancouver"/>
                        </div>
                    </div>
                    <div className={aboutStyles.column}>
                        <h3>JORDAN KATZEN</h3>
                        <p>
                            I finished my last year at <b>The University of Texas at Austin</b> where I earned my undergraduate degree in <b>Computer Science</b>.
                            <br /><br />
                            Other than being passionate about creating
                            I'm an avid reader, very amateur cyclist, decent guitarist, and huge sports fan. I'm also very passionate about music and fashion, though it's mostly listening and reading about those last two.
                            <br /><br />
                            I've always loved learning and strive to develop new and existing skills every day, whether it relates to software development, product management, investing, or music. 
                        </p>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default AboutPage