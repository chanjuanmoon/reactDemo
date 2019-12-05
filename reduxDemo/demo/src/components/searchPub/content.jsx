import React, { Component } from 'react'

import Search from './search/search'
import Main from './main/main'

import './content.css'

export default class Content extends Component {
 
  render() {
    return (
      <div style={{margin:'0 auto',width:'1000px'}}>
        <Search/>
        <Main/>
      </div>
    )
  }
}
