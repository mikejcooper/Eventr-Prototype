import React from "react";

import Child from "../playground/Child";


export default class Playground extends React.Component {
  constructor() {
    super();
    this.state = {title : "Welcome"};
  }

  changeTitle(title){
      console.log("here");
      this.setState({title: title});
  }
  
  render() {
    return (
      <div class="col-md-4">
        <Child changeTitle = {this.changeTitle.bind(this)} title = {this.state.title}></Child>
        <Child changeTitle = {this.changeTitle.bind(this)} title = {this.state.title}></Child>
        <Child changeTitle = {this.changeTitle.bind(this)} title = {this.state.title}></Child>
      </div>
    );
  }
}
