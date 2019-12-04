import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/app';
import AppRedux from './components/appRedux/appRedux'
import store from './redux/store/store'

function render (){
  ReactDOM.render(<AppRedux  store={store}/>, document.getElementById('root'));
}

//初始化渲染
render();

// 订阅监听(store中的状态变化了，就会自动调用进行重绘)
store.subscribe(render);