import React, { Component } from 'react'
import { Select , Button } from 'antd';

import './app.css'

const {Option} = Select

export default class App extends Component {
  state = {
    count:0,
    selectValue:1
  }
  handleSelect = (data) => {
    this.setState({selectValue:data});
  }
  increment  = e => {
    // 1.得到选择的增加数量
    // 2.得到原本的count状态
    const {count,selectValue} = this.state;

    // 3.更新count
    this.setState({count:count+selectValue});
  }
  reduce = e => {
     // 1.得到选择的减少数量
    // 2.得到原本的count状态
    const {count,selectValue} = this.state;

    // 3.更新count
    this.setState({count:count-selectValue});
  }
  incrementIfOdd = e => {
    // 1.得到选择的增加数量
    // 2.得到原本的count状态
    const {count,selectValue} = this.state;
    // 判断，满足条件才更新
    if(!(count%2 === 0)){
       // 3.更新count
      this.setState({count:count+selectValue});
    }

  }
  incrementAsync = e => {
    // 1.得到选择的增加数量
    // 2.得到原本的count状态
    const {count,selectValue} = this.state;

    // 启动延时定时器
    setTimeout(()=>{
       // 3.更新count
       this.setState({count:count+selectValue});
    },1000)

  }
  render() {
    const {count} = this.state;
    return (
      <div style={{width:'1000px',margin:'0 auto'}}>
        <h2>click {count} times</h2>
        <Select style={{width:'120px'}} defaultValue={1} onSelect={this.handleSelect}>
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
          <Option value={3}>3</Option>
        </Select>
        &nbsp;&nbsp;
        <Button onClick={this.increment}>+</Button>
        &nbsp;&nbsp;
        <Button onClick={this.reduce}>-</Button>
        &nbsp;&nbsp;
        {/* 奇数 */}
        <Button onClick={this.incrementIfOdd}>increment if odd</Button>
        &nbsp;&nbsp;
        {/* 异步更新 */}
        <Button onClick={this.incrementAsync}>increment async</Button>
      </div>
    )
  }
}
