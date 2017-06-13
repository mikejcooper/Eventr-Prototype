import React from 'react';
import { connect } from 'react-redux';
import { getEventData } from 'actions/eventActions'
import css from './Event.css'
import TimeIcon from 'svg/TimeIcon'
import LocationIcon from 'svg/LocationIcon'
import InfoIcon from 'svg/InfoIcon'

class EventDataCard extends React.Component {

  constructor(){
    super();
  }



  render() {


    return (
        <div class="event-data-card">
          <div class="box-card">
            <div class="one">
              <div class="icon">
                <TimeIcon/>
              </div>
              <div class="data">
                {this.props.start_time} to {this.props.end_time}
              </div>
            </div>
            <div class="divide"></div>
            <div class="one">
              <div class="icon">
                <LocationIcon/>
              </div>
              <div class="data">

              </div>
            </div>
            <div class="divide"></div>
            <div class="one">
              <div class="icon">
                <InfoIcon/>
              </div>
              <div class="data">
                {this.props.description}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default EventDataCard;
