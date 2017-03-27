import React from 'react';
import css from './SearchBar.css';
import SearchTag from './SearchTag/SearchTag';
import {addTag} from '../../actions/searchBarActions';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    tags: store.searchBar.tags
  };
})
class SearchBar extends React.Component {
  constructor(){
      super();
      this.onclick.bind(this);
      this.renderTags.bind(this);
  }

  onclick() {
    this.props.dispatch(addTag(1,"test"));
    // console.log("check if we get tags here");
    // console.log(this.props);
  }

  renderTags(){
    let lis = [];
    console.log("renderTags called")
    console.log(this.props);
    const {tags} = this.props;

    // console.log(this.props.tags[0]);
    if(this.props.tags == null) return;
    console.log(tags.length);
    for (var i =  0; i < this.props.tags.length; i++) {
      lis.push(<SearchTag key={i} id={this.props.tags[i].id} value={this.props.tags[i].text}/>);
    }
    return lis;
  }


  render() {
    // console.log(this.props);
    // console.log("candy");
    return (
      <div>
        <div class="box" onClick={()=>this.onclick(this)}/>
        {this.renderTags(this)}
      </div>
    );
  }
}

export default SearchBar;