import React from "react";

export default class Child extends React.Component {
  handleChange(e){
    const title = "hello";
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div class="col-md-4">
        <h1>{this.props.title}</h1>
        <a class="btn btn-default" onClick = {this.handleChange.bind(this)} >More Info</a>
      </div>
    );
  }
}
