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
    // <div class="svg-container">
    //   <svg version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" class="svg-content">
    //     {/*<circle fill="#F7941E" stroke="#231F20" stroke-width="10" stroke-miterlimit="10" cx="250" cy="250" r="200" opacity="0.6" />*/}
    //     <line id="svg_8" y2="316" x2="504" y1="316" x1="437" stroke-width="5" stroke="#000000" fill="none"/>
    //     {/*<line strokeWidth="5" stroke="#000000" y1="316" x1="437" y2="316" x2="504" fill="none"/>*/}
    //   </svg>
    // </div>
    return (

      <svg class="svg" preserveAspectRatio="none" viewBox="0 0 0.1 0.1">
        <g fill="none">
          <line y2="0" x2="0" y1="0" x1="4000" stroke="grey"/>
        </g>
      </svg>
    )
  }



  render() {

    return (
      <div class="event-carousel-bar">
          <div class="list-title">{this.props.iconAndTitle.title}</div>
            {/*<img class="list-icon" src={this.props.iconAndTitle.image}/>*/}
          <div class="bar-line">{this.renderSVGLine()}</div>

        <div class="navigation">

          <div class="tabs-container">
          {this.props.maxNumberOfElements > 1 && this.props.tabs}
          </div>

          <div class="nav-arrows">
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
      </div>
    );
  }
}

export default EventCarouselBar

