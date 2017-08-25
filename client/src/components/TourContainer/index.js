import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import Timestamp from 'react-timestamp'

import TourPointsContainer from '../TourPointsContainer'

const TourContainer = ({title, creator, created_at, tourPoints}) => (
  <Container>
    <Header as='h2' floated='left'>
      Tour {title}
    </Header>
    <div className="creator-timestamp">
      {creator}{' '}<Timestamp time={created_at} format="date" />
      
    </div>
    <br/>
    <TourPointsContainer
      data={tourPoints}
    />
  </Container>
)

export default TourContainer