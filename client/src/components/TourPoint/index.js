import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import TasksContainer from '../TasksContainer'
/*
const TourPoint = ({location, description, resolvedTasks}) => 
  <div className="tour-point">
    <Header as='h3' floated='left'>
      {location}
    </Header>
    <h4> {description ? description : null}</h4>
    <TasksContainer
      data={resolvedTasks}
    />
  </div>
*/
class TourPoint extends Component {
  render() {
    console.log('This is this.propsfrom TourPoint:')
    console.log(this.props)
    //==> [{…}, {…}, {…}, {…}]
    return this.props
    ? 
    <h1>
      HI
    </h1>
    : <h2>Damn..</h2>
  }
}

export default TourPoint
