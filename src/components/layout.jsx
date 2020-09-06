import { h } from 'preact';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faDownload,
  faLink,
  faPaperPlane,
  faRunning
} from '@fortawesome/free-solid-svg-icons';

import Footer from 'src/components/footer';
import Header from 'src/components/header';
import layoutStyles from 'src/styles/layout.module.scss';

import 'src/styles/index.scss';

const Layout = ({ children }) => {
  library.add(
    faLinkedin,
    faGithub,
    faPaperPlane,
    faDownload,
    faLink,
    faRunning
  );

  return (
    <div>
      <Header />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
