import React, { Component } from 'react'
import { Container, Icon, Grid } from 'semantic-ui-react'
import Timestamp from 'react-timestamp'

class TourPointsContainer extends Component {
  render() {
    const points = this.props.data
    return points.length > 0
    ? <Container>
        {points.map((point, i) => {
         return <div key={i}>
            <ul><h2>{point.location}</h2></ul>
            {point.resolved_tasks.map((task, i) => {
               return <li key={i}>
                  <Timestamp time={task.created_at} format="date" />
                  {task.seen ?
                    <Icon name="checkmark" size="small" color="green" />
                  : <Icon name="remove" size="small" color="red" />}
                  {task.problem_description}
                </li>
            })}
          </div>
        })}
    </Container>
    : <h2>No Tour Points Found for this Tour</h2>
  }
}

export default TourPointsContainer