import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import PropTypes from 'prop-types'


export default class Search extends Component {
  state = {
    search:''
  }
  static propTypes = {
    setSearchName:PropTypes.func.isRequired
  }
  handelSearch = e => {
    let search = e.target.value;
    this.setState({search});
  }
  handleSubmit = e => {
    e.preventDefault();
    // 收集数据
    const {search} = this.state;
    if(search){
      this.props.setSearchName(search);
    }
  }
  render() {
    const {search} = this.state;
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="请输入搜索内容"
              value={search}
              onChange={this.handelSearch}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
