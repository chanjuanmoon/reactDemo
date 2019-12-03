import React, { Component } from "react";
import { Button, Popconfirm, message } from "antd";
import PropTypes from "prop-types";

import "./commentItem.css";

export default class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    delteComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  };
  Confirm = e => {
    const { delteComment, index } = this.props;
    delteComment(index);
    message.success("删除成功");
  };
  onCancel = e => {};
  render() {
    const { comment } = this.props;
    return (
      <div>
        <span>{comment.username}说：</span>
        <span>{comment.conent}</span>
        <Popconfirm
          title="确定删除这条评论吗？"
          onConfirm={this.Confirm}
          onCancel={this.Cancel}
        >
          <Button className="delBtn">删除</Button>
        </Popconfirm>
      </div>
    );
  }
}
