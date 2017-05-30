import css from './SearchBar.css';
import React from 'react';
import { addTag, searchWithSearchBar } from '../../../modules/actions/searchBarActions';
import { connect } from "react-redux";
import SearchTag from '../SearchTag/SearchTag';

@connect((store) => {
  return {
    tags: store.searchBar.tags
  };
})
class SearchBar extends React.Component {
  constructor(){
      super();
      // this.onclick.bind(this);
      this.renderTags.bind(this);
      this.onSearchBarChange.bind(this);
      this.onSearchButtonClick.bind(this);
  }

  addTag(text) {
    this.props.dispatch(addTag(this.props.tags.length,text));
  }

  search() {
    let searchbarContents = new Object();
    searchbarContents.text = this.refs.textInput.value;
    searchbarContents.id = this.props.tags.length;
    this.props.dispatch(searchWithSearchBar(this.props.tags.concat(searchbarContents)));
  }

  onSearchButtonClick() {
    this.search();
  }

  renderTags(){
    let lis = [];
    const {tags} = this.props;

    if(this.props.tags == null) return;
    for (var i =  0; i < this.props.tags.length; i++) {
      lis.push(<SearchTag key={i} value={this.props.tags[i]} class="search-tag"/>);
    }
    return lis;
  }

  onSearchBarChange(event){
    let searchBar = this.refs.textInput;
    let text = searchBar.value;
    if((event.keyCode === 13 || event.keyCode === 32)&& !this.isStringEmpty(text)){
      this.addTag(text);
      this.search();
      this.refs.textInput.value = "";
    }
  }

  isStringEmpty(text){
    return (text.length === 0 || !text.trim());
  }

  render() {
    return (
      <div class="my-container-search-bar">
        {this.renderTags(this)}
          <input type="text" class="searchBar" placeholder="Search..." ref="textInput" onKeyUp={(event) => this.onSearchBarChange(event)} required/>
          <input type="button" class="searchButton"onClick={() => this.onSearchButtonClick()}/>
      </div>
    );
  }
}

export default SearchBar;
