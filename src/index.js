import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
