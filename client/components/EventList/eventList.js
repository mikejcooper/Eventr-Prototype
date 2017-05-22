import React from 'react';
import css from './eventList.css';
import Event from '../event/event';


class EventList extends React.Component {

  constructor(){
      super();
      this.state = {index: 0, elementsDisplayed: 3};
      this.setNextIndex = this.setNextIndex.bind(this);
      this.getPos = this.getPos.bind(this);
      this.handleTabClick = this.handleTabClick.bind(this);
  }

  setNextIndex(numberOfTabs,func){
    let newIndex = func(this.state.index);
    if(newIndex == numberOfTabs){
      newIndex = 0;
    } else if(newIndex < 0){
      newIndex = numberOfTabs-1;
    }
    this.setState({index: newIndex}) ;
  }

  getPos(numberOfEvents,numberOfTabs,numberElementsDisplayed,outerWidth){
    let nextPos = - numberElementsDisplayed * outerWidth * this.state.index;
    if(this.state.index == numberOfTabs - 1){
      nextPos = - (numberOfEvents - numberElementsDisplayed) * outerWidth;
    }
    return nextPos;
  }

  outerWidth(el) {
    var width = el.offsetWidth;
    var style = getComputedStyle(el);
    width += parseInt(style.marginLeft) + parseInt(style.marginRight);
    return width;
  }

  handleTabClick(goToIndex){
    console.log(goToIndex);
    this.setState({index: goToIndex})
  }

  onresize() {
    var items = document.querySelectorAll(".event");
    document.qu
    let widthComponent = this.outerWidth(items[0]);
    let maxElementsDisplayed = this.getMaxNumberOfElements(widthComponent);
    maxElementsDisplayed = maxElementsDisplayed > this.props.events.length ? this.props.events.length : maxElementsDisplayed;
    this.setState({elementsDisplayed: maxElementsDisplayed > 0 ? maxElementsDisplayed : 1 });
    if(this.state.index > maxElementsDisplayed - 1){
      this.setState({index: maxElementsDisplayed });
    }
  }

  getMaxNumberOfElements(eventSize){
    let documentWidth = document.documentElement.clientWidth - 200;
    let maxElementsDisplayed = Math.floor(documentWidth/eventSize);
    return maxElementsDisplayed;
  }

  componentDidMount() {
    window.addEventListener("resize", this.onresize.bind(this));
  }

  renderTabs(numberOfEvents){
    let numberOfTabs = Math.ceil(numberOfEvents/this.state.elementsDisplayed);
    let lis = [];
    for (var i = 0; i < numberOfTabs; i++) {
      if(this.state.index == i){
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
    for (var i = events.length - 1; i >= 0; i--) {
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
    let styleEventList = {
      width: size * this.state.elementsDisplayed,
    }
    return (
      <div style={styleEventList} class="eventList">
        <div>

          <div class="logo"/>
          <div class="navigation">

            {maxNumberOfElements > 1 && this.renderTabs(events.length)}
            <div class="forward-backward">
              <img class="nav-image-back" src="http://localhost:2000/images/left-arrow2.png"/>
              <div class="circle" value="<" onClick={()=>{this.setNextIndex(numberOfTabs,function (a){return a - 1})}}/>
            </div>
            <div class="forward-backward">
              <img class="nav-image-forward" src="http://localhost:2000/images/right-arrow2.png"/>
              <div class="circle" value=">" onClick={()=>{this.setNextIndex(numberOfTabs,function (a){return a + 1})}}/>
            </div>
          </div>
        </div>
    	 <div class="contentContainer" style={styleContainer}>
        <div id="wrapper" ref="wrap" class="wrapper" style={styleWrapper} >
          {this.renderEvents(events,size)}
        </div>
       </div>
      </div>
    );
  }
}

export default EventList

//<img class="nav-image-forward" src={require("../../images/right-arrow2.png")} />

//              // <img class="nav-image-back" src={require("../../images/left-arrow2.png")} />