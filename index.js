import { h, render } from 'preact';
import { BrowserRouter } from 'react-router-dom';
import App from 'src/App';

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
