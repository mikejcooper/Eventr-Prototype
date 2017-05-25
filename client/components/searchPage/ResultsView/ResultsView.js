import css from './ResultsView.css';
import React from 'react';
import { connect } from 'react-redux';
import Event from '../../event/event';
import EventList from '../../EventList/eventList'

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
    console.log(events);
    let lists = this.splitEvents(events,12);
    for (var i = 0; i < lists.length; i++) {
      lis.push(<EventList key={i} events={lists[i]} class="eventList" size={400}/>);
    }
    return lis;
  }

  render() {
    return (
    	<div class="container-results-view">
    		{this.renderEvents(this.props.events)}
    	</div>
    );
  }
}

export default ResultsView;