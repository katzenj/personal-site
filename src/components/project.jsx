import { h } from 'preact';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import projectStyles from 'src/styles/project.module.scss';

const Project = ({ title, link, desc }) => {
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title;
        const url = node.data.target.fields.file.url;

        return (
          <div><img alt={alt} src={url} /></div>
        );
      }
    }
  };

  return (
    <div className={projectStyles.project}>
      <h3><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h3>
      {documentToReactComponents(desc, options)}
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  desc: PropTypes.shape({})
};

export default Project;
