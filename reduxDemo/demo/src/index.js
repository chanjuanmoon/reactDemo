import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import store from './redux/store'

import Comment from '../src/containers/comment/comment' 

ReactDOM.render(
(
  <Provider store={store}>
    <Comment/>
  </Provider>
)
, 
document.getElementById('root'));

