import {connect} from 'react-redux'

import './appRedux.css'
import {incrementCreator,reduceCreator} from '../../redux/actions/actions'
import Counter from '../appRedux/counter'


export default connect(
  state =>({count:state}),
  {incrementCreator,reduceCreator}
)(Counter)