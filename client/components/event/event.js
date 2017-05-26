import React from 'react';
import css from './event.css';
import { openEventModal } from '../../actions/modalActions';
import { connect } from "react-redux";


// Maps dispatcher to props
@connect()
class Event extends React.Component {
  constructor(){
      super();
      this.handleHoverOn = this.handleHoverOn.bind(this);
      this.handleHoverOff = this.handleHoverOff.bind(this);
      this.handleImgClick = this.handleImgClick.bind(this);
      this.state = {hover: false};
  }

  handleHoverOn(){
      this.setState({hover: true});
  }

  handleHoverOff(){
      this.setState({hover: false});
  }

  handleImgClick(event_data){
      this.props.dispatch(openEventModal(event_data));
  }

  renderTags(tags) {
      var lis = [];
      for (var i=0; i< tags.length; i++) {
          lis.push(<button key={i} class="button-tags"> {tags[i]} </button>);
      }
      return (
          lis
      );
  }

  renderVenueSize(size) {
    var lis = []
    for (var i=0; i< size; i++) {
        lis.push(<img key={i} class="personIcon" src="https://openclipart.org/download/202776/pawn.svg" />)
    }
    return (lis)
  }

  renderOnHover(data) {
      return (
            <div class="footer">
              <div class="tags">{this.renderTags(data.tags)}</div>
              <div class="info">
                <div class="venue-size">{this.renderVenueSize(data.size)}</div>
              </div>
            </div>
        )
  }

  render() {
  	let d = this.props.data;
    let cl = this.state.hover ? "image darken" : "image";
    let size = this.props.size ? this.props.size : 350;
    let margin = 12;
    let style = {
      width: size - 2 * margin,
      height: size - 2 * margin,
      margin: margin
    }
    return (
      <div class="event" style={style} onMouseEnter={this.handleHoverOn} onMouseLeave={this.handleHoverOff}>
        <img class={cl} onClick={() => { this.handleImgClick(d) }} src={d.picture_url} />
        <div class="title">
          <h5>{d.name}</h5>
        </div>
         {this.state.hover && this.renderOnHover(d)}
      </div>
    );
  }
}

export default Event