import React from 'react';
import { connect } from 'react-redux';
import css from './SearchPage.css';
import SearchBar from './SearchBar/SearchBar';
import TagSpace from './TagSpace/TagSpace';
import ResultsView from './ResultsView/ResultsView';


class SearchPage extends React.Component {
  render() {
    return (
      <div class="search-page" >
        <SearchBar class="search-bar-container"/>
        <TagSpace class="tag-space-container"/>
        <ResultsView class="results-view-container"/>
      </div>
    );
  }
}

export default SearchPage;
