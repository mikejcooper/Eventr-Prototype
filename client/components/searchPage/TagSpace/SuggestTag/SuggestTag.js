import React from 'react';
import css from './SuggestTag.css';
import { connect } from "react-redux";
import {fetchSuggestTags,addTag, searchWithSearchBar} from '../../../../modules/actions/searchBarActions';

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
    let newTag = new Object();
    newTag.text = this.props.data;
    newTag.id = this.props.tags.length;
    this.props.dispatch(addTag(this.props.tags.length,this.props.data));
    this.props.dispatch(searchWithSearchBar(this.props.tags.concat(newTag)));
    this.props.dispatch(fetchSuggestTags());
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