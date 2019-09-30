import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App title="Thompson Boiler Works"/>, document.getElementById('root'));
serviceWorker.unregister();
