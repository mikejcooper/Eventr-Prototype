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

  //This is done temporarily, when we get our image server running this code will deprecate
  getImage(name){
    console.log(name);
    switch(name%3){
      case 0:
        return "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/13892039_10154522534679359_9217082776467699263_n.jpg?oh=b24958607434868d5ee1e17bf1392e0e&oe=595D242A";
      case 1:
        return "https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/17547021_10155073976014360_7420708260605825136_o.jpg?oh=572b28b1f7b3171c9f996bd97ca30548&oe=596AD605";
      case 2:
        return "https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/12140938_1075589775819831_2018018124720908281_o.jpg?oh=dc31c20138360f10766c1694c9004d3f&oe=59662012";
      default:
        return "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/13892039_10154522534679359_9217082776467699263_n.jpg?oh=b24958607434868d5ee1e17bf1392e0e&oe=595D242A";
    }
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
    let src = this.getImage(d.id);
    let size = this.props.size ? this.props.size : 350;
    let margin = 12;
    let style = {
      width: size - 2 * margin,
      height: size - 2 * margin,
      margin: margin
    }
    return (
      <div class="event" style={style} onMouseEnter={this.handleHoverOn} onMouseLeave={this.handleHoverOff}>
        <img class={cl} src={src} />
        <div class="title">
          <h5>{d.name}</h5>
        </div>
         {this.state.hover && this.renderOnHover(d)}
      </div>
    );
  }
}

export default Event