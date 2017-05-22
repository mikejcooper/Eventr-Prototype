import React from 'react';
import Playground from '../Playground/Playground';
import css from './main.css'
import SignInModal from '../signIn/SignInModal';
import Event from '../event/event';
import EventList from '../EventList/eventList'
import { connect } from 'react-redux';

@connect((store) => {
  return {
    events: store.searchBar.events
  };
})
class Home extends React.Component {

  constructor(){
      super();
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
      lis.push(<EventList key={i} events={lists[i]} class="eventList" size={300}/>);
    }
    return lis;
  }

  render() {
    const containerStyle = {
      marginTop: "-30px", // Allow children to render without hitting nav bar
    };
    console.log("render called");
    return (
      <div style={containerStyle}>
        <div class="my-image"/>
        <div class="filler"/>
       {this.renderEvents(this.props.events)}
       <SignInModal/>
      </div>
    );
  }
}

export default Home;
