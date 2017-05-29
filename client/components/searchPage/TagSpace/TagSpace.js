import css from './TagSpace.css';
import SearchTag from '../SearchTag/SearchTag';
import SuggestTag from './SuggestTag/SuggestTag';
import React from 'react';
import { connect } from "react-redux";
import { fetchSuggestTags } from '../../../modules/actions/searchBarActions'

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
		console.log("printing suggestTagSpace");
		console.log(this.props.suggestTags);
		let lis = [];
		for (var i = 18; i >= 0; i--) {
			lis.push(<SuggestTag class="suggestTag" key ={i} data={this.props.suggestTags[i]}/>);
		}
		return lis;
	}

	
	render() {
	    return (
	    	<div class="my-tagspace-container event-modal">
	    		<div class="control-left"/>
	    		<div class="content-space">
	    			{this.renderSuggestTags()}
	    		</div>
	    		<div class="control-right"/>
	    	</div>
	    );
	  }
}

export default TagSpace;