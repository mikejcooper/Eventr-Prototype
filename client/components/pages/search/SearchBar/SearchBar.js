import css from './SearchBar.css';
import React from 'react';
import { addTag, searchWithSearchBar } from 'actions/searchBarActions';
import { connect } from "react-redux";
import SearchTag from './SearchTag/SearchTag';

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
      lis.push(<SearchTag key={i} value={this.props.tags[i]} class="search-bar-tag"/>);
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
    let img = "http://localhost:2000/images/event1.jpg"
    let style_background = { 'backgroundImage': 'url(' + img + ')'};

    return (
      <div class="search-bar">
        <div class="background-img" style={style_background}/>
        {this.renderTags(this)}
        <input type="text" class="bar" placeholder="Search..." ref="textInput" onKeyUp={(event) => this.onSearchBarChange(event)} required/>
        <input type="button" class="search-button" onClick={() => this.onSearchButtonClick()}/>
      </div>
    );
  }
}

export default SearchBar;


//
// <div class="cover-image-container">
//   <div class="cover-image" style={style_background}/>
//   <div class="title">
//     <h1>{this.props.event.name}</h1>
//   </div>
//   <div class = "bottom">
//     {this.props.showModal && this.props.renderOnHover(this.props.event)}
//   </div>
// </div>