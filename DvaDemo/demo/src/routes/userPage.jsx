import React, { Component , Fragment} from 'react'
import { Link } from 'dva/router';

export default class UserPage extends Component {
  handleTOIndex = e => {
    console.log(this.props);
  }
  render() {
    return (
      <Fragment>
        <div>我是用户页</div>
        {/* 首页跳转 */}
        <Link to='/'>HOME</Link>
        <button onClick={this.handleTOIndex}>首页</button>

      </Fragment>
    )
  }
}
