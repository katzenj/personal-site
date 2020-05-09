import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';

import client from 'src/components/contentful-client';

import styles from 'src/styles/main.module.scss';

const Main = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'blogPost',
        select: 'fields.title,fields.publishedDate,fields.slug'
      });

      const retrievedPosts = response.items.map((item) => ({
        title: item.fields.title,
        date: moment(item.fields.publishedDate),
        slug: item.fields.slug
      }));
      retrievedPosts.sort((post1, post2) => moment(post1.date).isBefore(moment(post2.date)));
      setPosts(retrievedPosts);

      return retrievedPosts;
    } catch (err) {
      console.error(err);
      return {};
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={styles.profileContent}>
      <span className={styles.title} role="img" aria-label="computer man emoji">
        👨‍💻
      </span>
      <ol className={styles.posts}>
        {posts.map((post) => (
          <li className={styles.post} key={post.slug}>
            <Link to={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{post.date.format('MMM D, YYYY').toUpperCase()}</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Main;
