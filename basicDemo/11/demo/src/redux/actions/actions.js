/* 
包含所有 action creator
*/
import {INCREMENT,REDUCE} from '../actionTypes/actionTypes'

// 增加
export const incrementCreator = (selectValue) => ({type:INCREMENT,data:selectValue});

// 减少
export const reduceCreator = (selectValue) => ({type:REDUCE,data:selectValue});