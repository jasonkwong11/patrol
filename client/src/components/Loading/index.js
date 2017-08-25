import React from 'react';
import { Container, Dimmer, Loader } from 'semantic-ui-react'

const Loading = () =>
  <Container text>
      <Dimmer active inverted>
        <Loader content='Loading' />
      </Dimmer>
  </Container>

export default Loading
