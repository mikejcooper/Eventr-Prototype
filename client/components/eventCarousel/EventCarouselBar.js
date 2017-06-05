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
      <svg width="468px" height="5px" viewBox="0 0 468 5" version="1.1">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
          <path d="M2.5,2.5 L465.677072,2.5" id="Line" stroke="#979797" strokeWidth="4" fill="#D8D8D8"></path>
        </g>
      </svg>
    )
  }



  render() {

    return (
      <div class="event-carousel-bar">
        <h3 class="list-title">{this.props.iconAndTitle.title}</h3>
          {/*<img class="list-icon" src={this.props.iconAndTitle.image}/>*/}
        <h1 class="bar-line">
          hell
        </h1>

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

