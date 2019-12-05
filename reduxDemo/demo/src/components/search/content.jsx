import React, { Component } from 'react'

import Search from './search/search'
import Main from './main/main'

import './content.css'

export default class Content extends Component {
  state = {
    searchName:''
  }
  setSearchName = (searchName) =>{
    this.setState({searchName})
  }
  render() {
    const {searchName} = this.state;
    return (
      <div style={{margin:'0 auto',width:'1000px'}}>
        <Search setSearchName={this.setSearchName}/>
        <Main searchName={searchName}/>
      </div>
    )
  }
}
