/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import client from 'src/components/contentfulClient';
import Project from 'src/components/project';
import projectData from 'static/projectData';

import styles from 'src/styles/about.module.scss';

const About = () => {
  const [aboutContent, setAboutContent] = useState({
    title: '',
    content: '',
    resumeUrl: ''
  });
  const [projects, setProjects] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const title = 'About';

  const getEntries = async () => {
    try {
      setIsLoading(true);
      const response = await client.getEntries({
        content_type: 'bio'
      });
      const item = response.items[0];
      setAboutContent({
        title: item.fields.title,
        content: item.fields.content,
        picture: item.fields.picture.fields.file.url,
        resumeUrl: item.fields.document[0].fields.file.url
      });
      console.log(item);
    } catch (err) {
      console.error(err);
    }
  };

  const getProjects = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'project'
      });
      const responseProjects = response.items.map((proj) => ({
        title: proj.fields.title,
        link: proj.fields.link,
        desc: proj.fields.description
      }));
      responseProjects.sort((proj1, proj2) => proj1.title > proj2.title);

      setProjects(responseProjects);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getEntries().then(() => {
      setIsLoading(false);
    });
    getProjects();
  }, []);

  return (
    <div>
      <img className={styles.picture} src={aboutContent.picture} alt="A picture of myself" />
      <h1>
        {title}{' '}
        <a
          href={isLoading ? null : aboutContent.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <FontAwesomeIcon icon={['fas', 'download']} size="sm" />
        </a>
      </h1>
      <p
        className={classnames([
          styles.loadingContent,
          { [styles.animate]: isLoading, [styles.unanimated]: !isLoading }
        ])}
      />
      <p
        className={classnames([
          styles.loadingContent,
          { [styles.animate]: isLoading, [styles.unanimated]: !isLoading }
        ])}
      />
      <p
        className={classnames([
          styles.loadingContent,
          { [styles.animate]: isLoading, [styles.unanimated]: !isLoading }
        ])}
      />

      <p>{aboutContent.content}</p>
      <br />
      <hr />

      <h1>
        Projects{' '}
        <span role="img" aria-label="computer">
          💻
        </span>
      </h1>
      <div className={styles.projects}>
        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            link={project.link}
            desc={project.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
