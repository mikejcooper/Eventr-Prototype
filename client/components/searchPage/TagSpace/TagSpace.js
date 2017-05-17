import css from './TagSpace.css';
import SearchTag from '../SearchTag/SearchTag';
import SuggestTag from './SuggestTag/SuggestTag';
import React from 'react';
import { connect } from "react-redux";

@connect(
// (store) => {
//   return {
//     suggestTags: store.searchBar.suggestTags
//   };
// }
)

class TagSpace extends React.Component {
	
	constructor(){
		super();
		this.renderSuggestTags.bind(this);
	}

	renderSuggestTags(){
		let fakeData = ["hey","tag","rand","stuff","to","fake","data","for","now","hey","tag","rand","stuff","to","fake","data","for","now","hey","tag","rand","stuff","to","fake","data","for","now"];
		let lis = [];
		for (var i = fakeData.length - 1; i >= 0; i--) {
			lis.push(<SuggestTag class="suggestTag" key ={i} data={fakeData[i]}/>);
		}
		return lis;
	}

	
	render() {
	    return (
	    	<div class="my-container">
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