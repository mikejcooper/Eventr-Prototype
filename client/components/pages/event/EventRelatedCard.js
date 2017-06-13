import React from 'react';
import { connect } from 'react-redux';
import { getEventData } from 'actions/eventActions'
import css from './Event.css'
import MoreIcon from 'svg/MoreIcon'


class EventRelatedCard extends React.Component {

  constructor(){
    super();
  }



  render() {


    return (
      <div class="event-related-card">
        <div class="box-card">
          <div class="one">
            <div class="icon">
              <MoreIcon/>
            </div>
            <div class="data">
              Related Events
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventRelatedCard;
