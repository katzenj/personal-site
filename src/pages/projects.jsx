import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import client from 'src/components/contentful-client';
import Project from 'src/components/project';

import styles from 'src/styles/projects.module.scss';

const Projects = () => {
  const [aboutContent, setAboutContent] = useState({
    title: '',
    content: [''],
    resumeUrl: ''
  });
  const [projects, setProjects] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getEntries = async () => {
    try {
      setIsLoading(true);
      const response = await client.getEntries({
        content_type: 'bio'
      });
      const item = response.items[0];
      setAboutContent({
        title: item.fields.title,
        content: item.fields.content.split('\n'),
        resumeUrl: item.fields.document[0].fields.file.url
      });
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

      console.log(responseProjects);
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
    <div className={styles.aboutContainer}>
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
      {/* <div className={styles.bmcContainer}>
        <a className={styles.bmcButton} target="_blank" href="https://www.buymeacoffee.com/jak">
          <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a beer"/>
          <span className={styles.bmcText}>Buy me a beer (for research)</span>
        </a>
      </div> */}
    </div>
  );
};

export default Projects;
