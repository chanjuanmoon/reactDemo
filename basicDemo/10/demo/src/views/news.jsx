import React, { Component } from 'react'
import {List} from 'antd'

export default class News extends Component {
  state = {
    newsList:[
      'new01',
      'new02',
      'new03',
    ]
  }
  render() {
    const {newsList} = this.state;
    return (
      <div>
        <List 
        bordered
        itemLayout='vertical'
        dataSource={newsList}
        renderItem = {(item,index) => (
          <List.Item>
            <span>{item}</span>
          </List.Item>
        )}
        >
        </List>
      </div>
    )
  }
}
