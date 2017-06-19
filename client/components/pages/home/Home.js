import React from 'react';
import css from './Home.css'
import SignInModal from '../../modals/signIn/SignInModal';
import Event from '../../eventCarousel/EventCarouselItem';
import EventCarousel from '../../eventCarousel/EventCarousel'
import { connect } from 'react-redux';
import { searchWithSearchBar } from 'actions/searchBarActions'

@connect((store) => {
  return {
    events: store.searchBar.events
  };
})
class Home extends React.Component {

  constructor(){
    super();
    this.renderEvents.bind(this);
    this.renderSvg.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(searchWithSearchBar([]));
  }

  renderSvg(){
    return (
      <svg class="svg" width="377px" height="266px" viewBox="0 0 377 266" version="1.1" >
        <title>Slice 1</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g class="path" stroke="#000000" strokeWidth="3" fill="none" fillRule="evenodd">
          <circle class="path" stroke="#979797" cx="95" cy="66" r="26"></circle>
          <circle stroke="#979797" cx="296" cy="60" r="26"></circle>
          <path d="M131.386719,265.1875 C64.1289062,238.019531 52.3710938,159.667969 52.3710938,128.808594 C36.0390625,95.1054688 39.0395311,89.4237455 29.0976563,73.0351562 C19.1557814,56.646567 28.1132812,68.0039062 1.6484375,45.1953125 C61.71875,41.7695312 50.1132813,98.3125 81.2890625,106.613281 C113.088191,102.095346 111.496094,95.1054687 145.636719,89.1601562 C178.164063,89.84375 177.546875,90.3632812 196.371094,98.90625 C150.273438,106.613281 147.957031,106.929687 124.007812,115 C75.5078125,176.988281 188.519531,185.078125 225.941406,168.738281 C225.941406,183.416083 175.261719,209.402344 109.792969,185.03125 C98.7040572,180.903343 100.238281,207.011719 109.792969,232.140625 C119.347656,257.269531 136.13462,266.744176 131.386719,265.1875 Z" stroke="#979797"></path>
          <path d="M200.128906,97.9140625 C227.578125,98.921875 288.011719,119.246094 293.050781,136.628906 C292.9375,155.921875 282.746094,160.464844 258.964844,193.421875 C242.95673,225.06429 233.511719,234.539062 230.320312,260.625 C263.066406,228.855469 290.582031,183.578125 323.59375,185.453125 C347.734375,187.386719 355.992188,241.25 372.589844,262.058594 C383.636719,229.207031 364.647296,162.09426 355.534015,147.582542 C351.518047,135.044486 349.722656,128.112703 349.722656,123.828125 C395.164062,69.9648437 340.286981,7.08097837 334.753906,1.13671875 C329.220831,-4.80754087 371.421875,83.3046875 324.386719,96.609375 C272.707031,95.8632812 212.4375,84.0273438 200.128906,97.9140625 Z" stroke="#979797"></path>
        </g>
      </svg>
    )
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
    if(events == null) return;
    let lis = [];
    let lists = this.splitEvents(events,12);
    for (var i = 0; i < lists.length; i++) {
      lis.push(<EventCarousel key={i} number={i} events={lists[i]} class="eventList" size={300}/>);
    }
    return lis;
  }

  render() {
    // this.props.dispatch(searchWithSearchBar([]));
    const containerStyle = {
      // marginTop: "-30px", // Allow children to render without hitting nav bar
      height: '100%',

    };

    return (
      <div class ="home" style={containerStyle}>
        <div class="my-image">
          {this.renderSvg()}
        </div>
        <div class="events-view-container1">
          <div class="events-view-container2">
            {this.renderEvents(this.props.events)}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
