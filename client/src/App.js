import React, { Component } from 'react';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor () {
    super()
    this.state = {}
    this.getTours = this.getTours.bind(this)
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
    let {tours, tour} = this.state
    {console.log(this.state)}
    return tours
    ? <Container text>
      <Header as='h2' icon textAlign='center'>
        <Icon name='cocktail' circular />
        <Header.Content>
          Patrol Tours
        </Header.Content>
      </Header>
    </Container>
    : <Container text>
      <Dimmer active inverted>
        <Loader content='Loading' />
      </Dimmer>
    </Container>
  }
}

export default App;
