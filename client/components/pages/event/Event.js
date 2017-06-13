import React from 'react';
import { connect } from 'react-redux';
import { getEventData } from 'actions/eventActions'
import EventDataCard from './EventDataCard'
import EventRelatedCard from './EventRelatedCard'
import css from './Event.css'
import { Textfit } from 'react-textfit';


@connect((store) => {
  return {
    data: store.event
  };
})
class Event extends React.Component {

  constructor(){
    super();
  }

  componentDidMount(){
    if(this.props.params != null){
      this.props.dispatch(getEventData(this.props.params.id));
    }
  }

  render() {
    let data = this.props.data.event_data
    console.log(data)

    let style_background = { 'backgroundImage': 'url(' + data.cover_url + ')'}

    return (
      <div class="event-page">

        <div class="top-container">
          <div class="data-container">

            <div class="event-data-container">

              <div class="title">
                <div class="expand-container">
                  <Textfit mode="single">{data.name} </Textfit>
                </div>
              </div>

              <div class="at">
                <div>@</div>
              </div>

              <div class="title venue">
                <div class="expand-container">
                  <Textfit mode="single">{data.name} </Textfit>
                </div>
              </div>

            </div>

            <div class="tag-container">
              TAGS
            </div>

          </div>
          <div class="cover-image" style={style_background}/>

        </div>

        <div class="bottom-container">

        <EventDataCard start_time={data.start_time} end_time={data.end_time} description={data.description}/>

        <EventRelatedCard />

        </div>

      </div>
    );
  }
}

export default Event;
