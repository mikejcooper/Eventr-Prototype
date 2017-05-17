import React from 'react';
import css from './SuggestTag.css';
import { connect } from "react-redux";
import {addTag} from '../../../../actions/searchBarActions';

@connect((store) => {
  return {
    tags: store.searchBar.tags
  };
})
class SuggestTag extends React.Component {
  constructor(){
      super();
      this.addTag.bind(this);
  }

  addTag(){
  	// console.log(this.props);
    console.log("adding tag: " + this.props.data);
    this.props.dispatch(addTag(this.props.tags.length,this.props.data));
  }

  render() {
    return (
      <div class="suggestTag" onClick={() => this.addTag()}>
      	{this.props.data}
      </div>
    );
  }
}

export default SuggestTag