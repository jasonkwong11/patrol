import React from 'react'
import { Header, Segment, Icon } from 'semantic-ui-react'

const Heading = () => (
  <Segment clearing>
    <Header as='h2' floated='left'>
      PATROL
    </Header>
    <Icon name='sidebar' size='big'/>
  </Segment>
)

export default Heading