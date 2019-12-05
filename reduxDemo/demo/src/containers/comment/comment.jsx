import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import CommentAdd from "../../components/commentAdd/commentAdd";
import CommentList from "../../components/commentList/commentList";
import {addComment,delteComment,getComments} from '../../redux/actions'

import "./comment.css";

class Comment extends Component {
  
  state = {
    // commentLists: [
    //   { username: "Tom", conent: "React挺好的！" },
    //   { username: "Jack", conent: "React挺难的！" }
    // ]
    commentLists:[]
  };
  static propTypes = {
    commentLists:PropTypes.array.isRequired,
    addComment:PropTypes.func.isRequired,
    delteComment:PropTypes.func.isRequired,
    getComments:PropTypes.func.isRequired
  }
  componentDidMount(){
    // 异步获取所有评论数组
    this.props.getComments();
  }
  render() {
    const { commentLists,addComment,delteComment } = this.props;
    return (
      <div>
        <Card title="请发表对React的评论">
          <Row gutter={16}>
            <Col span={8}>
              <CommentAdd addComment={addComment} />
            </Col>
            <Col span={16}>
              <CommentList commentLists={commentLists} delteComment={delteComment}/>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default connect(
  state => ({commentLists:state.comments}),
  {addComment,delteComment,getComments}
)(Comment)