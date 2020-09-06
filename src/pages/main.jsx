import { format, parseISO, compareDesc } from 'date-fns';
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
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
        date: parseISO(item.fields.publishedDate),
        slug: item.fields.slug
      }));
      retrievedPosts.sort(compareDesc);
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
      <div className={styles.mainAbout}>
        <p>I'm a software engineer and runner (unofficially of course).</p>
        <p>
          Currently a Software Engineer @ affirm in San Francisco. I graduated
          with a B.S.A in Computer Science and a minor in Business from The
          University of Texas at Austin in 2019.
        </p>
        <p>
          I tend to have a lot of varying interests that take precendence at
          different times: researching renewables, training for my second
          half-marathon (first was a solo run during quarantine), building out
          an app to find local beers, and reading about psychology - to name a
          handful.
        </p>
      </div>
      <ol className={styles.posts}>
        {posts.map((post) => (
          <li className={styles.post} key={post.slug}>
            <Link to={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{format(post.date, 'MMM do, yyyy').toUpperCase()}</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Main;
