import { format, parseISO } from 'date-fns';
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { useParams } from 'react-router-dom';

import client from 'src/components/contentful-client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import blogStyles from 'src/styles/blog.module.scss';

const BlogPost = () => {
  const { slug } = useParams();
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title;
        const url = node.data.target.fields.file.url;
        const desc = node.data.target.fields.description;

        return (
          <div className={blogStyles.postImg}>
            <figure>
              <img alt={alt} src={url} />
            </figure>
            <figcaption>
              <p>
                <em>{desc}</em>
              </p>
            </figcaption>
          </div>
        );
      }
    }
  };

  const [post, setPost] = useState({
    title: '',
    subtitle: '',
    date: '',
    body: ''
  });

  const getPosts = async () => {
    try {
      const response = await client.getEntries({
        'content_type': 'blogPost',
        'fields.slug[in]': slug
      });
      const post = response.items[0];
      setPost({
        title: post.fields.title,
        subtitle: post.fields.subtitle,
        date: format(parseISO(post.fields.publishedDate), 'MMM do, yyyy'),
        body: post.fields.body
      });

      return post;
    } catch (err) {
      console.error(err);
      return {};
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={blogStyles.post}>
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      <time>{post.date}</time>
      {documentToReactComponents(post.body, options)}
    </div>
  );
};

export default BlogPost;
