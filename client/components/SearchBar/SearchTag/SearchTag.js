import React from 'react';
import css from './SearchTag.css';


class SearchBar extends React.Component {
  constructor(){
      super();
  }

  render() {
    return (
      <div>
        <div class="my-left">
          <button id="1" class="delete-button">X</button>
          <div id="1" class="tag">{this.props.value}</div>
        </div>
        <span class="glyphicon glyphicon-plus plus"></span>
      </div>
    );
  }
}

export default SearchBar