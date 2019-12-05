import React, { Component } from 'react'
import { Select , Button } from 'antd';
import PropTypes from 'prop-types'

// import * as actions from '../../redux/actions/actions'


const {Option} = Select

export default class Counter extends Component {
  state = {
    selectValue:1
  }
  static propTypes = {
    count:PropTypes.number.isRequired,
    incrementCreator:PropTypes.func.isRequired,
    reduceCreator:PropTypes.func.isRequired,
    incrementAsyncCreator:PropTypes.func.isRequired
  }
  handleSelect = (data) => {
    this.setState({selectValue:data});
  }
  increment  = e => {
    // 1.得到选择的增加数量
    const {selectValue} = this.state;

    // 2.调用store的方法更新状态
    // this.props.store.dispatch(actions.incrementCreator(selectValue));
    this.props.incrementCreator(selectValue);
    
  }
  reduce = e => {
     // 1.得到选择的减少数量
    const {selectValue} = this.state;

    // 2.更新
    // this.props.store.dispatch(actions.reduceCreator(selectValue));
    this.props.reduceCreator(selectValue);

  }
  incrementIfOdd = e => {
    // 1.得到选择的增加数量
    const {selectValue} = this.state;

    // 2.得到原本的count状态
    // const count = this.props.store.getState();
    const {count} = this.props;

    // 判断，满足条件才更新
    if(!(count%2 === 0)){
      // this.props.store.dispatch(actions.incrementCreator(selectValue));
      this.props.incrementCreator(selectValue);
    }

  }
  incrementAsync = e => {
    // 1.得到选择的增加数量
    const {selectValue} = this.state;

    // 2.异步操作
    this.props.incrementAsyncCreator(selectValue);

  }
  render() {
    // const count = this.props.store.getState();
    const {count} = this.props;
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

