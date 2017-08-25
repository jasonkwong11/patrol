import React, { Component } from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

import Task from '../Task'
import Loading from '../Loading'

class TasksContainer extends Component {
  render() {
    return this.props
    ? 
    <ul>
      { this.props.map((task) => {
        <li>

        </li>
      })}
    </ul>
    : <Loading />
  }
}

export default TasksContainer