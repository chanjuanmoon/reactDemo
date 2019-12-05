import React, { Component } from "react";
import { Card, List } from "antd";
import PropTypes from "prop-types";
import axios from "axios";

const { Meta } = Card;

export default class Main extends Component {
  state = {
    initView: true,
    loading: false,
    users: null,
    errorMsg: null
  };
  static propTypes = {
    searchName: PropTypes.string.isRequired
  };

  // 当组件接收到新的属性时回调
  componentWillReceiveProps(nextPopos) {
    const { searchName } = nextPopos;
    //指定了新的searchName，需要发新的请求
    // 1.更新状态（请求中）
    this.setState({
      initView: false,
      loading: true
    });
    // axios
    const url = `https://api.github.com/search/users?q=${searchName}`;
    axios
      .get(url)
      .then(res => {
        //得到响应数据
        const result = res.data;
        const users = result.items.map(item => {
          return {
            name: item.login,
            avatarUrl: item.avatar_url,
            url: item.html_url
          };
        });
        // 更新状态(成功)
        this.setState({
          loading: false,
          users
        });
      })
      .catch(err => {
        // 更新状态(失败)
        this.setState({
          loading: false,
          errorMsg: err.message
        });
      });
  }

  render() {
    const { initView, loading, users, errorMsg } = this.state;
    if (initView) {
      return <h2>请输入关键字进行搜索</h2>;
    } else if (loading) {
      return <h2>正在搜索中...</h2>;
    } else if (errorMsg) {
      return <h2>{errorMsg}</h2>;
    } else {
      return (
        <div>
          <List
            grid={{gutter:16,column:4}}
            dataSource={users}
            renderItem={(user, index) => (
              <List.Item>
                <Card
                  hoverable
                  style={{ width: '240px' }}
                  cover={
                    <a href={user.url}>
                      <img alt='' src={user.avatarUrl} style={{width:'240px'}}/>
                    </a>
                  }
                >
                  <Meta title={user.name} description={user.name}></Meta>
                </Card>
              </List.Item>
            )}
          ></List>
        </div>
      );
    }
  }
}
