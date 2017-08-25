import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import TasksContainer from '../TasksContainer'

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

export default TourPoint