import axios from "axios";
import {FETCH_SUGGESTTAGS_SEARCH_BAR, ADD_TAG_SEARCH_BAR, DELETE_TAG_SEARCH_BAR, FETCH_EVENTS_FULFILLED,FETCH_EVENTS_REJECTED} from './types';

export function addTag(id, text) {
  return {
    type: ADD_TAG_SEARCH_BAR,
    payload: {
      id,
      text,
    },
  }
}

export function deleteTag(id) {
  return { type: DELETE_TAG_SEARCH_BAR, payload: id}
}

export function searchWithSearchBar(tags){
	return function(dispatch) {
		var result = tags.map(function(a) {return a.text;});
		var meta = new Object();
		var headers = new Object();
		headers.tags = result.join(" ");
		headers.limit = 48;
		meta.headers = headers;
		meta = {
			params : headers
		}
		axios.get("http://localhost:4000/api/events/search/tags",meta)
		.then((response) => {
			// let fetched = splitEvents(response.data,10);
			response.data.pop();
			dispatch({type: FETCH_EVENTS_FULFILLED, payload: response.data});
		})
		.catch((err) => {
            console.log(err);
		});
	}
}


export function fetchSuggestTags(){
	return function(dispatch) {
		var meta = new Object();
		var headers = new Object();
		headers.number = 20;
		meta = {
			params : headers
		}
		axios.get("http://localhost:4000/api/events/search/getTags",meta)
		.then((response) => {
			let tags = response.data.tags.split(',');
			dispatch({type: FETCH_SUGGESTTAGS_SEARCH_BAR, payload: tags});
		})
		.catch((err) => {
			console.log(err);
		});
	}
}