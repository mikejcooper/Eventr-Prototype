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
      lis.push(<EventList events={events[i]} class="eventList" size={350}/>);
    }
    return lis;
  }

  render() {
    const containerStyle = {
      marginTop: "200px", // Allow children to render without hitting nav bar
    };
    return (
      <div style={containerStyle}>
       {this.renderEvents(this.props.events)}
       <SignInModal/>
        
      </div>
    );
  }
}

export default Home;
