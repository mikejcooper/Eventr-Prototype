import css from './ResultsView.css';
import React from 'react';
import { connect } from 'react-redux';
import Event from '../../../event/Event';
import EventList from '../../../eventCarousel/EventCarousel'

@connect((store) => {
  return {
    events: store.searchBar.events
  };
})
class ResultsView extends React.Component {

  constructor(){
  	super();
  	this.splitEvents.bind(this);
  	this.renderEvents.bind(this);
  }

  splitEvents(events,size) {
    let lists = [];
    for (var i=0; i<events.length; i+=size) {
        var smallarray = events.slice(i,i+size);
        lists.push(smallarray);
    }
    return lists;
  }

  renderEvents(events){
    let lis = [];
    if(events == null) return;
    let lists = this.splitEvents(events,12);
    for (var i = 0; i < lists.length; i++) {
      lis.push(<EventList key={i} number={i} events={lists[i]} class="eventList" size={300}/>);
    }
    return lis;
  }


render() {
    return (
      <div class="results-view-container1">
        <div class="results-view-container2">
          {this.renderEvents(this.props.events)}
        </div>
      </div>
    );
  }
}

export default ResultsView;