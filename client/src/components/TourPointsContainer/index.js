import React, { Component } from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

import TourPoint from '../TourPoint'
import Loading from '../Loading'

class TourPointsContainer extends Component {
  render() {
    console.log('This is this.props.data from TourPointsContainer:')
    console.log(this.props.data)
    return this.props.data.length > 0
    ? 
    <ul>
      { this.props.data.map((point_object, i) => {
        <li>
          <TourPoint
            location={point_object.location}
            description={point_object.description}
            resolvedTasks={point_object.resolved_tasks}
          />
        </li>
      })}
    </ul>
    : <h2>No Tour Points Found for this Tour</h2>
  }
}

export default TourPointsContainer