/* 
包含了所有的action creator(action的工厂函数)
*/
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  RECEIVE_COMMENTLISTS
} from './action-types'

// 同步添加
export const addComment = (comment) => ({
  type: ADD_COMMENT,
  data: comment
});

// 同步删除
export const delteComment = (index) => ({
  type: DELETE_COMMENT,
  data: index
});

// 同步接收commentLists
const receiveCommentLists = (commentLists) => ({type:RECEIVE_COMMENTLISTS,data:commentLists});

//  异步从后台获取数据
export const getComments = () => {
  return dispatch => {
    // 模拟发送ajax请求异步获取数据
    setTimeout(() => {
      const initCommentList = [{
          username: "Tom",
          conent: "React挺好的！"
        },
        {
          username: "Jack",
          conent: "React挺难的！"
        }
      ];
      // 分发一个同步的action
      dispatch(receiveCommentLists(initCommentList));
    })
  }
}