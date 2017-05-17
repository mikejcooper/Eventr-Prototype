import React from 'react';
import css from './SearchTag.css';
import { connect } from "react-redux";
import {deleteTag} from '../../../actions/searchBarActions';

@connect((store) => {
  return {
    
  };
})
class SearchTag extends React.Component {
  constructor(){
      super();
      this.removeTag.bind(this);
  }

  removeTag(){
    console.log("remove tag: " + this.props.value.text);
    this.props.dispatch(deleteTag(this.props.value.text));
  }

  render() {
    return (
      <div class="wrapper">
        <div class="my-left">
          <button id={this.props.value.id} class="delete-button" onClick={() => this.removeTag()}>X</button>
          <div id={this.props.value.id} class="tag">{this.props.value.text}</div>
        </div>
        <span class="glyphicon glyphicon-plus plus"></span>
      </div>
    );
  }
}

export default SearchTag