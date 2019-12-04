import React, { Component } from 'react'
import { Layout, List } from "antd";
import {Switch,Route,Redirect} from 'react-router-dom'

import News from './news'
import Message from './message'
import MyNavLink from '../components/myNavLink'

const { Header, Content } = Layout;


export default class Home extends Component {
  state = {
    data:['news','message']
  }
  render() {
    const {data} = this.state;
    return (
      <div>
        <Layout>
          <Header style={{backgroundColor:'white'}}>
            <List
            grid={{gutter:16,column:2}}
            bordered
            dataSource={data}
            renderItem = {(item,index) => (
              <List.Item>
                <MyNavLink to={`/home/${item}`}>{item}</MyNavLink>
              </List.Item>
            )}
            >
            </List>
          </Header>
          <Content style={{backgroundColor:'white'}}>
            <Switch>
              <Route path='/home/news' component={News}></Route>
              <Route path='/home/message' component={Message}></Route>
              <Redirect to='/home/news'></Redirect>
            </Switch>
          </Content>
        </Layout>
      </div>
    )
  }
}
