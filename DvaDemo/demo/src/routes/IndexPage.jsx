import React from 'react';
import {connect} from 'dva'

class IndexPage extends React.Component{
  handleSetName = e => {
    this.props.dispatch({
      type:'indexTest/setName',
      data:{
        name:'白敬亭'
      }
    })
  }
  render(){
    return (
      <div>
        我是首页
        <h2>{this.props.name}</h2>
        <h2>{this.props.msg}</h2>
        <button onClick={this.handleSetName}>setName</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    msg:'bjt',
    name:state.indexTest.name
  }
}

export default connect(mapStateToProps)(IndexPage);
