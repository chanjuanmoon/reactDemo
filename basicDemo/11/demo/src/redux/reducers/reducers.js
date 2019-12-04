/* 
包含n个reducer函数的模块
*/
import {INCREMENT,REDUCE} from '../actionTypes/actionTypes'

export function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.data;
    case REDUCE:
      return state - action.data;
    default:
      return state
  }
}