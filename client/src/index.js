import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/sass/main.scss'
import './styles/sass/fonts.scss'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
