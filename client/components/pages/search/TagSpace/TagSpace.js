import css from './TagSpace.css';
import SearchTag from '../SearchBar/SearchTag/SearchTag';
import SuggestTag from './SuggestTag/SuggestTag';
import React from 'react';
import { connect } from "react-redux";
import { fetchSuggestTags } from 'actions/searchBarActions'

@connect(
(store) => {
  return {
    suggestTags: store.searchBar.suggestTags
  };
}
)

class TagSpace extends React.Component {
	
	constructor(){
		super();
		this.renderSuggestTags.bind(this);
	}

	componentDidMount(){
    	this.props.dispatch(fetchSuggestTags());
  	}

	renderSuggestTags(){
		let lis = [];
		for (var i = 18; i >= 0; i--) {
			lis.push(<SuggestTag class="suggestTag" key ={i} data={this.props.suggestTags[i]}/>);
		}
		return lis;
	}

	
	render() {
	    return (
	    	<div class="tag-space">
	    		<div class="container">
	    			{this.renderSuggestTags()}
	    		</div>
	    	</div>
	    );
	  }
}

export default TagSpace;