import React, { Component } from 'react';
import { Router } from '@reach/router';

import Layout from 'src/components/layout';
import About from 'src/pages/about';
import Main from 'src/pages/main';
import BlogPost from 'src/components/blog-post';

class App extends Component {
  render () {
    return (
      <Layout>
        <Router>
          <Main default path="/"/>
          <About path="/about"/>
          <BlogPost path="/blog/:slug" />
        </Router>
      </Layout>
    );
  }
}

export default App;
