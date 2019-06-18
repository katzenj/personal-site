import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

import blogStyles from '../styles/blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                }  
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMM D, YYYY")
                    }
                }
            }
        }
    `)

    const title = "Blog"

    return (
        <div>
            <Layout>
                <Head title={title} />
                <h1>{title}</h1>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post} key={edge.node.slug}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.publishedDate.toUpperCase()}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage