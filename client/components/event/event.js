import React from 'react';
import css from './event.css';


class Event extends React.Component {
  constructor() {
    super();
  }
  
  render() {
  	let d = this.props.data;
    return (
      <div class="box">
      	<div>
      		<h4>{d.title}</h4>
      		<h6>{d.subTitle}</h6>
      	</div>
      	<div>
      		<div>
      			people/rating/price
      		</div>
      		<div>
      		<img/>
      			Tags
      		</div>
      	</div>
      </div>
    );
  }
}

export default Event