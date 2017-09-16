import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'
import Timestamp from 'react-timestamp'

import TourPointsContainer from '../TourPointsContainer'

const TourContainer = ({title, creator, created_at, tourPoints}) => (
  <Container as={Grid}>
    <div className="ui equal width grid">
      <div className="one wide column">
      </div>
      <div className="fifteen wide column">
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
      </div>
    </div>
  </Container>
)

export default TourContainer