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
                            I am an incoming Software Engineer at Affirm, a recent graduate of <em>The University of Texas at Austin</em> (with a degree in Computer Science and certificate in Business), and a creative developer interested in full-stack web and iOS development.
                            <br /><br />
                            Other than being passionate about creating, I'm an avid reader, very amateur cyclist, decent guitarist, and huge sports fan. I also love music and fashion.
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