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


  renderEvents(events){
    let lis = [];
    if(events == null) return;
    for (var i = 0; i < events.length; i++) {
      lis.push(<EventList key={i} events={events[i]} class="eventList" size={350}/>);
    }
    return lis;
  }

  render() {
    const containerStyle = {
      marginTop: "200px", // Allow children to render without hitting nav bar
    };
    // let events = [];
    // for (var i = 0; i < 10; i++) {
    //   events[i] = {name: 'name1', subTitle: 'subTitle', imageURL: '../../images/event1.jpg', size: 3, price: 3.95, rating: 4, tags: ['super','awesome','cool','music']};
    // }
    //   let eventslist = [];
    //   for (var i = 0; i < 6; i++) {
    //   eventslist[i] = events;
    // }
    return (
      <div style={containerStyle}>
       {this.renderEvents(this.props.events)}
       <SignInModal/>
      </div>
    );
  }
}

export default Home;
