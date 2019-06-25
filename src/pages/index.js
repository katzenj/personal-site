import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import mainStyles from '../styles/index.module.scss'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "data/images/linkedin.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        src
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Home" />
            <div className={mainStyles.profileContent} >
                <img alt="From LinkedIn" src={data.file.childImageSharp.fluid.src} />
                <h1>UT Grad & Software Engineer <span role="img" aria-label="computer man">👨‍💻</span></h1>
                <p>An incoming Software Engineer at Affirm, I spent the spring and summer of 2018 working for Google and Tableau, and graduated from UT Austin this past May.</p>
            </div>
        </Layout>
    )
}

export default IndexPage