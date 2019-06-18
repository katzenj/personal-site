import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Head from '../components/head'
import Layout from '../components/layout'

import blogStyles from '../styles/blogTemplate.module.scss'

// Fetching from Contentful.

export const query = graphql`
    query (
        $slug: String!
    ) {
        contentfulBlogPost (slug: {eq: $slug}) {
            title
            subtitle
            publishedDate(formatString: "MMM D, YYYY")
            body {
                json
            }
        }
    }
`

const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                const desc = node.data.target.fields.description['en-US']

                return (
                    <div className={blogStyles.postImg}>
                        <figure>
                            <img alt={alt} src={url} />
                        </figure>
                        <figcaption>
                            <p><em>{desc}</em></p>
                        </figcaption>
                    </div>
                )
            }
        }
    }

    const title = props.data.contentfulBlogPost.title
    const subtitle = props.data.contentfulBlogPost.subtitle
    let date = (props.data.contentfulBlogPost.publishedDate).toUpperCase()

    return (
        <Layout>
            <Head title={title} />
            <div className={blogStyles.post}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <time>{date}</time>
                {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            </div>
        </Layout>
    )
}

export default Blog