import React, { Component } from 'react'
import { withRouter } from 'dva/router';

class Child extends Component {
  handleTOIndex = e => {
    // 当不用withRouter包裹Child时：this.porps为空
    // 包裹后：this.props不为空
    // console.log(this.props);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h2>我是通用组件</h2>
        <button onClick={this.handleTOIndex}>首页——child</button>
      </div>
    )
  }
}
export default withRouter(Child);