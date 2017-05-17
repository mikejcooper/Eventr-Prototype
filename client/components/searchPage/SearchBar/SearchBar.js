import css from './SearchBar.css';
import React from 'react';
import { addTag, searchWithSearchBar } from '../../../actions/searchBarActions';
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

  // onclick() {
  //   this.props.dispatch(addTag(this.props.tags.length,"this.props.tags.length"));
  //   console.log("check if we get tags here");
  //   console.log(this.state);
  // }

  addTag(text) {
    this.props.dispatch(addTag(this.props.tags.length,text));
  }

  search() {
    this.props.dispatch(searchWithSearchBar(this.props.tags));
  }

  onSearchButtonClick() {
    //send request to api
  }

  renderTags(){
    let lis = [];
    const {tags} = this.props;

    // console.log(this.props.tags[0]);
    if(this.props.tags == null) return;
    // console.log(tags.length);
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
      this.refs.textInput.value = "";
      this.search();
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
