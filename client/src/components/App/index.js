import React, { Component } from 'react';
import { Container} from 'semantic-ui-react'

import Loading from '../Loading'; 
import Heading from '../Heading';
import SideBar from '../SideBar';

class App extends Component {
  constructor () {
    super()
    this.state = {}
    this.getTours = this.getTours.bind(this);
    this.getTour = this.getTour.bind(this);
  }

  componentDidMount() {
    this.getTours()
  }

  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error))
    })
  }

  getTours () {
    this.fetch('api/tours')
      .then(tours => {
        this.setState({tours: tours})
        this.getTour(tours[0].id)
      })
  }

  getTour (id) {
    this.fetch(`api/tours/${id}`)
      .then(tour => this.setState({tour: tour}))
  }


  render() {
    let {tours, tour, getTour} = this.state
    return tours
    ? <Container text>
    <Heading />
    <SideBar 
      tours={tours}
      tour={tour}
      getTour={this.getTour}
    />
    </Container>
    : <Loading />
  }
}

export default App;
