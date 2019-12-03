import React, { Component } from 'react'
import {Card,List} from 'antd'
import PropTypes from 'prop-types'

import CommentItem from '../commentItem/commentItem'

export default class CommentList extends Component {

  //给组件类指定属性（简化写法）
  static propTypes = {
    commentLists:PropTypes.array.isRequired,
    delteComment:PropTypes.func.isRequired
  }

  render() {
    const {commentLists,delteComment} = this.props;
    return (
      <div>
        <Card title='评论回复'>
          <List 
            itemLayout='vertical'
            bordered
            dataSource={commentLists}
            renderItem = {(item,index) =>(
              <List.Item>
                <CommentItem comment={item} delteComment={delteComment} index={index}></CommentItem>
              </List.Item>
            )
            }
          ></List>
          {/* <ul>
            {
              commentLists.map((comment,index) => <CommentItem comment={comment} key={index}></CommentItem>)
            }
          </ul> */}
        </Card>
      </div>
    )
  }
}

//之前写法
// CommentList.propTypes = {
//   commentLists:PropTypes.array.isRequired
// }