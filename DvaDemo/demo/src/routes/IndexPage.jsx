import React from 'react';
import {connect} from 'dva'

import * as apis from '../services/example'


class IndexPage extends React.Component{
  handleSetName = e => {
    this.props.dispatch({
      type:'indexTest/setName',
      data:{
        name:'白敬亭'
      }
    })
  }
  handleSetNameAsync = e => {
    this.props.dispatch({
      type:'indexTest/setNameAsync',
      data:{
        name:'小白'
      }
    })
  }
  testCnode = e => {
    this.props.dispatch({
      type:'indexTest/testCnode'
    })
  }
  componentDidMount(){
    // 测试mock数据
    apis.testMock().then((res)=>{
      console.log(res);
    })
  }
  render(){
    console.log(this.props.cnodeData);
    return (
      <div>
        我是首页
        <h2>{this.props.name}</h2>
        <h2>{this.props.msg}</h2>
        <button onClick={this.handleSetName}>setName</button>
        <button onClick={this.handleSetNameAsync}>setNameAsync</button>
        <button onClick={this.testCnode}>testCnode</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    msg:'bjt',
    name:state.indexTest.name,
    cnodeData:state.indexTest.cnodeData
  }
}

export default connect(mapStateToProps)(IndexPage);
