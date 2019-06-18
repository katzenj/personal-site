import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faDownload } from '@fortawesome/free-solid-svg-icons'

import Footer from './footer'
import Header from './header'
import '../styles/index.scss'

import layoutStyles from '../styles/layout.module.scss'

const Layout = (props) => {
    library.add(faLinkedin, faGithub, faPaperPlane, faDownload)

    return (
        <div>
            <Header />
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout