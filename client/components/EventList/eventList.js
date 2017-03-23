import React from 'react';
import css from './eventList.css';
import Event from '../event/event';


class EventList extends React.Component {

  constructor(){
      super();
      this.state = {pos: 0,index: 0, elementsDisplayed: 3};
      this.stepNext = this.stepNext.bind(this);
      this.getNextPos = this.getNextPos.bind(this);
  }

  stepNext(func) {
    var items = document.querySelectorAll(".event");
    let size = 0;
    if(items.length != 0){
      size = this.outerWidth(items[0]);
    }
    let numberOfTabs = Math.ceil(items.length/this.state.elementsDisplayed);
    let newIndex = this.getNextIndex(numberOfTabs,func);
    let newPos = this.getNextPos(items.length,this.state.elementsDisplayed,numberOfTabs,size,newIndex);
    this.setState({pos: newPos, index: newIndex});
  }

  getNextIndex(numberOfTabs,func){
    let newIndex = func(this.state.index);
    if(newIndex == numberOfTabs){
      newIndex = 0;
    } else if(newIndex < 0){
      newIndex = numberOfTabs-1;
    }
    return newIndex;
  }

  getNextPos(numberOfEvents,numberElementsDisplayed,numberOfTabs,size,newIndex){
    let nextPos = - numberElementsDisplayed * size * newIndex;
    if(newIndex == numberOfTabs - 1){
      nextPos = - (numberOfEvents - numberElementsDisplayed) * size;
    }
    return nextPos;
  }

  outerWidth(el) {
    var width = el.offsetWidth;
    var style = getComputedStyle(el);
    width += parseInt(style.marginLeft) + parseInt(style.marginRight);
    return width;
  }

  renderEvents(events,size){
    let lis = [];
    for (var i = events.length - 1; i >= 0; i--) {
      lis.push(<Event class="event" key ={i} data={events[i]} size={size}/>);
    }
    return (lis);
  }

  handleTabClick(goToIndex){
    this.setState({index: goToIndex})
  }

  renderTabs(numberOfEvents){
    let numberOfTabs = Math.ceil(numberOfEvents/this.state.elementsDisplayed);
    let lis = [];
    for (var i = 0; i < numberOfTabs; i++) {
      if(this.state.index == i){
        lis.push(<button key={i}  class="tab lit"></button>);
      } else {
        lis.push(<button key={i} class="tab"></button>);
      }
    }
    return lis;
  }

	render() {
    let events = this.props.events;
    let size = this.props.size;
    let numberOfElements = events.length;
    var translateValue = "translate3d(" + this.state.pos + "px" + ", 0px, 0)";
    let styleWrapper = {
      transform: translateValue,
      width: size * numberOfElements,
    }
    let styleContainer = {
      width: size * this.state.elementsDisplayed,
      height: size
    }
    return (
      <div>
    	 <div class="contentContainer" style={styleContainer}>
        <div id="wrapper" ref="wrap" class="wrapper" style={styleWrapper} >
          {this.renderEvents(events,size)}
        </div>
       </div>
        <div class="block yellow" onClick={()=>{this.stepNext(function (a){return a - 1})}}/>
        <div class="block green" onClick={()=>{this.stepNext(function (a){return a + 1})}}/>
        {this.renderTabs(events.length)}
      </div>
    );
  }
}

export default EventList