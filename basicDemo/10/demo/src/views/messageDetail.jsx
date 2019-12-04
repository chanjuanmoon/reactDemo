import React, { Component } from 'react'


export default class MessageDetail extends Component {
  state = {
    allMessageList:[
      { id: 1, title: "message01", content:'1' },
      { id: 2, title: "message02", content:'2' },
      { id: 3, title: "message03", content:'3' }
    ]
  }
  render() {
    const {id} = this.props.match.params;
    //查询得到对应的message
    const {allMessageList} = this.state;
    const message = allMessageList.find((m)=>m.id === id*1);//返回第一个结果为true的数组元素
    return (
      <div>
        <ul>
          <li>Id:{message.id}</li>
          <li>Title:{message.title}</li>
          <li>Content:{message.content}</li>
        </ul>
      </div>
    )
  }
}
