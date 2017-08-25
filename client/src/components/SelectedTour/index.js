import React, {Component} from 'react';
import { Container, Header } from 'semantic-ui-react'

import Heading from '../Heading'
import Tour from '../Tour'
import Loading from '../Loading'
import TourContainer from '../TourContainer'
 
class SelectedTour extends Component {
  render() {
    const {tour} = this.props
    return tour
    ? <Container text>
        <TourContainer
          title={tour.title}
          creator={tour.creator}
          created_at={tour.created_at}
          tourPoints={tour.tour_points}
        />
      </Container>
    : <Loading />
  }
}


export default SelectedTour;