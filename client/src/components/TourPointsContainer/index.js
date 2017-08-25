import React, { Component } from 'react'
import { Container, Header, Segment, Icon } from 'semantic-ui-react'
import Timestamp from 'react-timestamp'

import TourPoint from '../TourPoint'
import Loading from '../Loading'

class TourPointsContainer extends Component {
  render() {
    const points = this.props.data
    console.log('This is points from TourPointsContainer:')
    console.log(points)
    //==> [{…}, {…}, {…}, {…}]
    return points.length > 0
    ? <Container>
      {points.map((point, i) => {
        console.log('Hello!!! Heres a point:')
        console.log(point)
       return <div key={i}>
          <h2><ul>{point.location}</ul></h2>
          {point.resolved_tasks.map((task, i) => {
             return <li key={i}>
                <Timestamp time={task.created_at} format="date" /> 
                {task.seen ? 
                  <Icon name="checkmark" size="small" color="green" /> 
                : <Icon name="remove" size="small" color="red" />}
                {task.problem_description}
              </li>
          
            console.log('Now heres a resolved task:')
            console.log(task)
 
          })}
        
        </div>
      })}
    </Container>
    : <h2>No Tour Points Found for this Tour</h2>
  }
}

export default TourPointsContainer