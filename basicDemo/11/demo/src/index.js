import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
// import App from './components/app';
import AppRedux from './components/containers/appRedux'
import store from './redux/store/store'


// Provider来管理store
ReactDOM.render((
  <Provider store={store}>
    <AppRedux/>
  </Provider>
),document.getElementById('root'))



// function render (){
//   ReactDOM.render(<AppRedux  store={store}/>, document.getElementById('root'));
// }

// //初始化渲染
// render();

// // 订阅监听(store中的状态变化了，就会自动调用进行重绘)
// store.subscribe(render);