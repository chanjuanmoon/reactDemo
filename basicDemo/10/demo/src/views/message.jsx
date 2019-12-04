import React, { Component } from "react";
import { List , Button } from "antd";
import {Route} from 'react-router-dom'

import MessageDetail from './messageDetail'
import MyNavLink from '../components/myNavLink'

export default class Message extends Component {
  state = {
    messageList: [],
    haveData: false
  };
  componentDidMount() {
    //模拟异步获取messageList
    setTimeout(() => {
      const messageList = [
        { id: 1, title: "message01" },
        { id: 2, title: "message02" },
        { id: 3, title: "message03" }
      ];
      this.setState({ messageList });
    }, 2000);
    this.setState({ haveData: true });
  }
  showDetail = (id) => {
    this.props.history.push(`/home/message/messageDetail/${id}`);
  }
  showDetail1 = (id) => {
    this.props.history.replace(`/home/message/messageDetail/${id}`);
  }
  handleBack = e => {
    this.props.history.goBack();
  }
  handleFoward = e => {
    this.props.history.goForward();
  }
  // 页面跳转
  reqPage = e => {
    window.location = 'http://www.baidu.com';
  }
  render() {
    const { messageList, haveData } = this.state;
    return !haveData ? (
      "loading"
    ) : (
      <div>
        <List
          bordered
          itemLayout="vertical"
          dataSource={messageList}
          renderItem={(item, index) => (
            <List.Item>
              <MyNavLink to={`/home/message/messageDetail/${item.id}`}>{item.title}</MyNavLink>
              <Button onClick={()=> this.showDetail(item.id)}>push()查看</Button>
              <Button onClick={()=> this.showDetail1(item.id)}>replace()查看</Button>
            </List.Item>
          )}
        ></List>
        <Button onClick={this.handleBack}>回退</Button>
        <Button onClick={this.handleFoward}>前进</Button>
        <Button onClick={this.reqPage}>页面跳转</Button>
        <Route path='/home/message/messageDetail/:id' component={MessageDetail}></Route>
      </div>
    );
  }
}
