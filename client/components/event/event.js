import React from 'react';
import css from './event.css';


class Event extends React.Component {
  constructor(){
      super();
      this.handleHoverOn = this.handleHoverOn.bind(this);
      this.handleHoverOff = this.handleHoverOff.bind(this);
      this.state = {hover: false};
  }

  handleHoverOn(){
        this.setState({hover: true});
  }

  handleHoverOff(){
        this.setState({hover: false});
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
        lis.push(<img key={i} class="personIcon" src={require("../../images/personIcon.png")} />)
    }
    return (lis)
  }

  renderOnHover(data) {
      return (
            <div class="footer">
              <div class="info clearfix">
                <div class="venue-size">{this.renderVenueSize(data.size)}</div>
                <div class="price">£{data.price}</div>
              </div>
              <div class="tags">{this.renderTags(data.tags)}</div>
            </div>
        )
  }

  render() {
  	let d = this.props.data;
    let cl = this.state.hover ? "image darken" : "image";
    let src = require("../../images/event1.jpg");
    let size = this.props.size ? this.props.size : 350;
    let margin = 8;
    let style = {
      width: size - 2 * margin,
      height: size - 2 * margin,
      margin: margin

    }
    return (
      <div class="event" style={style} onMouseEnter={this.handleHoverOn} onMouseLeave={this.handleHoverOff}>
        <img class={cl} src={src} />
        <div class="title">
          <h5>{d.title}</h5>
          <p>{d.subTitle}</p>
        </div>
        {this.state.hover && this.renderOnHover(d)}
      </div>
    );
  }
}

export default Event