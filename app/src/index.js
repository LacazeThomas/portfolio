import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Text from './Text';
import Social from './Social'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Text />, document.getElementById('text'));
ReactDOM.render(<Social />, document.getElementById('social'));

serviceWorker.unregister();
