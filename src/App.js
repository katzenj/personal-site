import { h, Component } from 'preact';
import { Switch, Route } from 'react-router-dom';

import Layout from 'src/components/layout';
import About from 'src/pages/about';
import Main from 'src/pages/main';
import BlogPost from 'src/components/blog-post';

class App extends Component {
  render () {
    return (
      <Layout>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog/:slug">
            <BlogPost />
          </Route>
        </Switch>
      </Layout>
    );
  }
}

export default App;
