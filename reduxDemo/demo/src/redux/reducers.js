/* 
包含n个reducer函数(根据老的state和action返回一个新的state)
*/
import {combineReducers} from 'redux'

import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENTLISTS} from './action-types'


const initCommentList = [];
function comments(state = initCommentList,action){
  switch (action.type){
    case ADD_COMMENT:
      return [action.data,...state];
    case DELETE_COMMENT:
      return state.filter((comment,index) => index !== action.data);
    case RECEIVE_COMMENTLISTS:
      return action.data;
    default:
      return state
  }
}

const initCommentList1 = [];
function comments1(state = initCommentList1,action){
  switch (action.type){
    case ADD_COMMENT:
      return [action.data,...state];
    case DELETE_COMMENT:
      return state.filter((comment,index) => index !== action.data);
    case RECEIVE_COMMENTLISTS:
      return action.data;
    default:
      return state
  }
}

export default combineReducers({
  comments,
  comments1
})

// redux向外暴露的state是什么结构？
// {comments:[],comments1:[]}