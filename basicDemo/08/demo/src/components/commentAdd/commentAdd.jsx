import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import PropTypes from 'prop-types'

const { TextArea } = Input;

export default class CommentAdd extends Component {
  state = {
    username: "",
    content: ""
  };
  static propTypes = {
    addComment:PropTypes.func.isRequired
  }
  handelName = e => {
    const username = e.target.value;
    this.setState({username});
  };
  handelContent = e => {
    const content = e.target.value;
    this.setState({content});
  };
  handleSubmit = e => {
    e.preventDefault();
    //收集数据，并封装成comment
    const comment = this.state;
    // 更新状态
    this.props.addComment(comment);
    // 清除输入数据
    this.setState({
      username:'',
      content:''
    });
  };
  render() {
    const { username, content } = this.state;
    return (
      <div>
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <Form.Item label="用户名">
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="请输入用户名"
              value={username}
              onChange={this.handelName}
            />
          </Form.Item>
          <Form.Item>
            <TextArea
              placeholder="请输入评论"
              autoSize={{ minRows: 3, maxRows: 5 }}
              value={content}
              onChange={this.handelContent}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
