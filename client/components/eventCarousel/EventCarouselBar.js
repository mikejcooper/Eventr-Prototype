/**
 * Created by mikecooper on 02/06/2017.
 */
import React from 'react';
import css from './EventCarouselBar.css';


class EventCarouselBar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSVGLine(){
    return (
      <svg class="svg" width="1049px" height="1px" viewBox="0 0 1049 1" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <title>Line</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
          <path d="M0.5,0.5 L1047.50764,0.5" id="Line" stroke="#979797"></path>
        </g>
      </svg>
    )
  }



  render() {

    return (
      <div class="event-carousel-bar">
          <h3 class="list-title">{this.props.iconAndTitle.title}</h3>
            {/*<img class="list-icon" src={this.props.iconAndTitle.image}/>*/}
          <div class="bar-line">{this.renderSVGLine()}</div>

        <div class="navigation">

          {this.props.maxNumberOfElements > 1 && this.props.tabs}
          <div class="forward-backward">
            <img class="nav-image-back" src="http://localhost:2000/images/left-arrow2.png"/>
            <div class="circle" value="<" onClick={this.props.nextIndexL}/>
          </div>
          <div class="forward-backward">
            <img class="nav-image-forward" src="http://localhost:2000/images/right-arrow2.png"/>
            <div class="circle" value=">" onClick={this.props.nextIndexR}/>
          </div>
        </div>
      </div>
    );
  }
}

export default EventCarouselBar

