import React from 'react';
import Playground from '../Playground/Playground';
import css from './main.css'
import SignInModal from '../signIn/SignInModal';
import Event from '../event/event';
import EventList from '../EventList/eventList'

class Home extends React.Component {
  render() {
  	let events = [];
    events[0] = {title: 'Super awesome Event', subTitle: 'subTitle', imageURL: '../../images/event1.jpg', size: 3, price: 3.95, rating: 4, tags: ['super','awesome','cool','music']};
    events[1] = {title: 'Super Event', subTitle: 'sub', imageURL: '../../images/event1.jpg', size: 3, price: 3.95, rating: 4, tags: ['super','njmyn','rnhh','musgsfvfsic']};
    events[2] = {title: 'Super awesome Event', subTitle: 'haha', imageURL: '../../images/event1.jpg', size: 2, price: 2.00, rating: 4, tags: ['way','too','comp','ddsmwmc']};
    events[3] = {title: 'Super awesome Event', subTitle: 'nkjcn', imageURL: '../../images/event1.jpg', size: 4, price: 1.95, rating: 4, tags: ['evfs','vsfv','cfvdfvool','vdsfv']};
    events[4] = {title: 'Super awesome Event', subTitle: 'nkjcn', imageURL: '../../images/event1.jpg', size: 4, price: 1.95, rating: 4, tags: ['evfs','vsfv','cfvdfvool','vdsfv']};
    events[5] = {title: 'Super awesome Event', subTitle: 'nkjcn', imageURL: '../../images/event1.jpg', size: 4, price: 1.95, rating: 4, tags: ['evfs','vsfv','cfvdfvool','vdsfv']};
    events[6] = {title: 'Super awesome Event', subTitle: 'nkjcn', imageURL: '../../images/event1.jpg', size: 4, price: 1.95, rating: 4, tags: ['evfs','vsfv','cfvdfvool','vdsfv']};
    events[7] = {title: 'Super awesome Event', subTitle: 'nkjcn', imageURL: '../../images/event1.jpg', size: 4, price: 1.95, rating: 4, tags: ['evfs','vsfv','cfvdfvool','vdsfv']};
    events[8] = {title: 'Super awesome Event', subTitle: 'nkjcn', imageURL: '../../images/event1.jpg', size: 4, price: 1.95, rating: 4, tags: ['evfs','vsfv','cfvdfvool','vdsfv']};
    events[9] = {title: 'Super awesome Event', subTitle: 'nkjcn', imageURL: '../../images/event1.jpg', size: 4, price: 1.95, rating: 4, tags: ['evfs','vsfv','cfvdfvool','vdsfv']};
    
    const containerStyle = {
      marginTop: "200px", // Allow children to render without hitting nav bar
    };

    return (
      <div style={containerStyle}>
       <EventList events ={events} class="eventList" size={350}/>
       <EventList events ={events} class="eventList" size={350}/>
       <EventList events ={events} class="eventList" size={350}/>
       <EventList events ={events} class="eventList" size={350}/>
       <SignInModal/>
        
      </div>
    );
  }
}

export default Home;
