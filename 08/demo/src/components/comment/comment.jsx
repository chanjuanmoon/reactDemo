import React, { Component } from "react";
import { Card, Row, Col } from "antd";

import CommentAdd from "../commentAdd/commentAdd";
import CommentList from "../commentList/commentList";

import "./comment.css";

export default class Comment extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     commentlists:[
  //       {username:'Tom',comment:'React挺好的！'},
  //       {username:'Jack',comment:'React挺难的！'}
  //     ]
  //   }
  // }
  // 简化写法给组件对象指定state属性
  state = {
    commentLists: [
      { username: "Tom", conent: "React挺好的！" },
      { username: "Jack", conent: "React挺难的！" }
    ]
  };
  // 添加评论
  addComment = comment => {
    let { commentLists } = this.state;
    commentLists.unshift(comment);
    this.setState({ commentLists });
  };

  // 删除指定评论评论
  delteComment = index => {
    let { commentLists } = this.state;
    commentLists.splice(index, 1);
    this.setState({ commentLists });
  };

  render() {
    const { commentLists } = this.state;
    return (
      <div>
        <Card title="请发表对React的评论">
          <Row gutter={16}>
            <Col span={8}>
              <CommentAdd addComment={this.addComment} />
            </Col>
            <Col span={16}>
              <CommentList commentLists={commentLists} delteComment={this.delteComment}/>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
