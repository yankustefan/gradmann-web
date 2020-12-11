import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let renderedString = ReactDOMServer.renderToString(<App />);
renderedString = renderedString.replace(/&#x27;/gm, "'");
renderedString = renderedString.replace(/<!-- -->/gm, '');
renderedString = renderedString.replace(/data-reactroot=""/gm, '');

document.getElementById('render').value = renderedString;
