import { h, render } from 'preact';
import { HashRouter } from 'react-router-dom';
import App from 'src/App';

render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
