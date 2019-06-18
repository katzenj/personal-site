import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import footerStyles from '../styles/footer.module.scss'

const Footer = () => {
    
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <a href="https://www.linkedin.com/in/jordankatzen/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","linkedin"]} size="lg" /></a>
            <a href="https://github.com/katzenj/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","github"]} size="lg" /></a>
            <a href="mailto:jkatzen8@gmail.com"><FontAwesomeIcon icon={["fas","paper-plane"]} size="lg" /></a>
            <p>{data.site.siteMetadata.author} © 2019</p>
        </footer>
    )
}

export default Footer