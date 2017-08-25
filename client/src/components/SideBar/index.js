import React, { Component } from 'react'
import { Sidebar, Segment, Menu } from 'semantic-ui-react'
import Timestamp from 'react-timestamp'

import SelectedTour from '../SelectedTour';

class SideBar extends Component {
  render() {
    const { tours, getTour } = this.props
    const tour = this.props.tour

    return (
      <div className="group">
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={true} icon='labeled' vertical inverted>
          {Object.keys(tours).map((key) => {
            return <Menu.Item active={tour && tour.id === tours[key].id} key={key} onClick={() => getTour(tours[key].id)}>
              Tour {tours[key].title}
              <br/>
              {tours[key].creator}
              <br/>
              <Timestamp time={tours[key].created_at} format="date" />
            </Menu.Item>
          })}
          </Sidebar>
          <Sidebar.Pusher>
            <SelectedTour 
              tour={tour}
             />
          </Sidebar.Pusher>

          <Clearfix />
        </Sidebar.Pushable>
      </div>
    )
  }
}

const Clearfix = () =>
  <div>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
  </div>

export default SideBar