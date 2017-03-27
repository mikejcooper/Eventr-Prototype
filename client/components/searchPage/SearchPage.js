import React from 'react';
import { connect } from 'react-redux';
import css from './SearchPage.css';
import SearchBar from './SearchBar/SearchBar';
import TagSpace from './TagSpace/TagSpace';
import ResultsView from './ResultsView/ResultsView';


class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <SearchBar class="search-bar"/>
        <TagSpace class="tag-space"/>
        <ResultsView class="results-view"/>
      </div>
    );
  }
}

export default SearchPage;
