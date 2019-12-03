import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Comment from '../src/components/comment/comment'
// import Content from '../src/components/search/content'
import Content from '../src/components/searchPub/content' 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Content/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
