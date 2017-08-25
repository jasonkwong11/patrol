import React, { Component } from 'react'
import { Sidebar, Segment, Menu, Container } from 'semantic-ui-react'

import SelectedTour from '../SelectedTour';

import Heading from '../Heading';

class SideBar extends Component {
  render() {
    const { tours, getTour } = this.props
    const tour = this.props.tour

    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={true} icon='labeled' vertical inverted>
          {Object.keys(tours).map((key) => {
            return <Menu.Item active={tour && tour.id === tours[key].id} key={key} onClick={() => getTour(tours[key].id)}>
              Tour {tours[key].title}
            </Menu.Item>
          })}
          </Sidebar>
          <Sidebar.Pusher>
            <SelectedTour
              tour={tour}
             />
             <Heading/>
             <Heading/>
             <Heading/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}


export default SideBar