import React, { Component } from "react";
import { Layout, Row, Col, List } from "antd";
import {Switch,Route,Redirect} from 'react-router-dom'

import "./app.css";
import About from '../views/about'
import Home from '../views/home'
import MyNavLink from './myNavLink'

const { Header, Content } = Layout;

export default class App extends Component {
  state = {
    data:['About','Home']
  }
  render() {
    const {data} = this.state;
    return (
      <div style={{width:'1000px',margin:'0 auto'}}>
        <Layout>
          <Header style={{backgroundColor:'white'}}>
            <h2>React Router Demo</h2>
          </Header>
          <Content style={{backgroundColor:'white'}}>
            <Row gutter={32}>
              <Col span={8}>
                <List
                  bordered
                  dataSource={data}
                  renderItem={(item, index) => (
                    <List.Item>
                      <MyNavLink to={`/${item}`}>{item}</MyNavLink>
                    </List.Item>
                  )}
                ></List>
              </Col>
              <Col span={16}>
                <Switch>
                  <Route path='/about' component={About}></Route>
                  <Route path='/home' component={Home}></Route>
                  <Redirect to='/about'></Redirect>
                </Switch>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}
