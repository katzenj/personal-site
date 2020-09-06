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
          <div className={projectStyles.imageContainer}>
            <img alt={alt} src={url} />
          </div>
        );
      },
      'unordered-list': (node) => {
        const listItems = node.content.map(
          (item) => item.content[0].content[0].value
        );
        return (
          <div className={projectStyles.textContainer}>
            {listItems.map((listItem) => (
              <p>{listItem}</p>
            ))}
          </div>
        );
      }
    }
  };

  return (
    <div className={projectStyles.project}>
      <h2>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
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
