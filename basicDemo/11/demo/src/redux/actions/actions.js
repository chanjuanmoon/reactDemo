/* 
包含所有 action creator
同步的action都返回一个对象
异步的action返回的是一个函数
*/
import {INCREMENT,REDUCE} from '../actionTypes/actionTypes'

// 增加 同步
export const incrementCreator = (selectValue) => ({type:INCREMENT,data:selectValue});

// 减少 同步
export const reduceCreator = (selectValue) => ({type:REDUCE,data:selectValue});

// 异步action
export const incrementAsyncCreator = (selectValue) => {
  return dispatch => {
    // 异步代码
    // 模拟异步代码
    setTimeout(()=>{
      // 1s之后才去分发一个增加的action
        dispatch(incrementCreator(selectValue));
    },1000);
  }
}