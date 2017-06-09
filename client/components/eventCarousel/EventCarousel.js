import React from 'react';
import css from './EventCarousel.css';
import Event from '../event/Event';
import Measure from 'react-measure'
import EventCarouselBar from './EventCarouselBar'


class EventCarousel extends React.Component {

  constructor(){
    super();
    this.state = {carouselIndex: 0, elementsDisplayed: 4};
    this.setNextIndex = this.setNextIndex.bind(this);
    this.getPos = this.getPos.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.getIconAndTitle = this.getIconAndTitle.bind(this);
  }

  componentDidMount(){
    this.onresize();
    window.addEventListener("resize", this.onresize.bind(this));
  }

  moveCarousel(newIndex){
    this.setState({carouselIndex: newIndex})
  }

  getIconAndTitle(){
    switch(this.props.number%3){
      case 0:
        return { title: "Ticketed" , image: "http://localhost:2000/images/ticket.png"}
        break;
      case 1:
        return { title: "Dancing" , image: "http://localhost:2000/images/discoball.png"}
        break;
      case 2:
        return { title: "Drinking" , image: "http://localhost:2000/images/cocktail.png"}
        break;
      default:
        return { title: "Dancing" , image: "http://localhost:2000/images/discoball.png"}
    }
  }

  setNextIndex(numberOfTabs,func){
    let newIndex = func(this.state.carouselIndex);
    if(newIndex == numberOfTabs){
      newIndex = 0;
    } else if(newIndex < 0){
      newIndex = numberOfTabs-1;
    }
    if(this.refs.main){
      this.moveCarousel(newIndex)
    }
  }

  getPos(numberOfEvents,numberOfTabs,numberElementsDisplayed,outerWidth){
    let nextPos = - numberElementsDisplayed * outerWidth * this.state.carouselIndex;
    if(this.state.carouselIndex == numberOfTabs - 1){
      nextPos = - (numberOfEvents - numberElementsDisplayed) * outerWidth;
    }
    return nextPos;
  }

  outerWidth(el) {
    if(this.refs.main){
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width += parseInt(style.marginLeft) + parseInt(style.marginRight);
      return width;
    }
  }

  handleTabClick(goToIndex){
    if(this.refs.main){
      this.moveCarousel(goToIndex)
    }
  }

  onresize() {
    var items = document.querySelectorAll(".event");
    let widthComponent = this.outerWidth(items[0]);
    let maxElementsDisplayed = this.getMaxNumberOfElements(widthComponent);
    maxElementsDisplayed = maxElementsDisplayed > this.props.events.length ? this.props.events.length : maxElementsDisplayed;
    if(this.refs.main){
      this.setState({elementsDisplayed: maxElementsDisplayed > 0 ? maxElementsDisplayed : 1 });
    }
    if(this.state.carouselIndex > maxElementsDisplayed - 1){
      if(this.refs.main){
        this.setState({index: maxElementsDisplayed });
      }
    }
  }

  getMaxNumberOfElements(eventSize){
    let documentWidth =this.outerWidth(document.querySelectorAll('.event-carousel')[0])
    let maxElementsDisplayed = Math.floor(documentWidth/eventSize);
    return maxElementsDisplayed;
  }

  renderTabs(numberOfEvents){
    let numberOfTabs = Math.ceil(numberOfEvents/this.state.elementsDisplayed);
    let lis = [];
    for (var i = 0; i < numberOfTabs; i++) {
      if(this.state.carouselIndex == i){
        lis.push(<button key={i} onClick={this.handleTabClick.bind(this, i)} class="tab lit"></button>);
      } else {
        lis.push(<button key={i} onClick={this.handleTabClick.bind(this, i)} class="tab"></button>);
      }
    }
    return (
      <div class="tabs">
        {lis}
      </div>
    );
  }

  renderEvents(events,size){
    let lis = [];
    for (var i = 0; i < events.length; i++) {
      lis.push(<Event class="event" key ={i} data={events[i]} size={size}/>);
    }
    return lis;
  }

  render() {
    let events = this.props.events;
    let size = this.props.size;
    let numberOfElements = events.length;
    let numberOfTabs = Math.ceil(numberOfElements/this.state.elementsDisplayed);
    let pos = this.getPos(numberOfElements,numberOfTabs,this.state.elementsDisplayed,size);
    var translateValue = "translate3d(" + pos + "px" + ", 0px, 0)";
    let maxNumberOfElements = this.getMaxNumberOfElements(size);
    let styleWrapper = {
      transform: translateValue,
      width: size * numberOfElements,
    }
    let styleContainer = {
      width: size * this.state.elementsDisplayed,
      height: size
    }
    let iconAndTitle = this.getIconAndTitle();

    return (
      <div class="event-carousel" id='carousel' ref="main">

        <EventCarouselBar iconAndTitle={iconAndTitle} maxNumberOfElements={maxNumberOfElements} tabs={this.renderTabs(events.length)}
                          nextIndexL={()=>{this.setNextIndex(numberOfTabs,function (a){return a - 1})}}
                          nextIndexR={()=>{this.setNextIndex(numberOfTabs,function (a){return a + 1})}}/>

        <div class="event-container" style={styleContainer}>
          <div class="wrapper" id="wrapper" ref="wrap" class="wrapper" style={styleWrapper} >
            {this.renderEvents(events,size)}
          </div>
        </div>
      </div>
    );
  }
}

export default EventCarousel
