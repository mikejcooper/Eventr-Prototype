import axios from "axios";
import {ADD_TAG_SEARCH_BAR, DELETE_TAG_SEARCH_BAR, FETCH_EVENTS_FULFILLED,FETCH_EVENTS_REJECTED} from './types';

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
		// let events = [];
		// for (var i = 0; i < 33; i++) {
		// 	events[i] = {name: 'name1', id: {i}, subTitle: 'subTitle', imageURL: '../../images/event1.jpg', size: 3, price: 3.95, rating: 4, tags: ['super','awesome','cool','music']};
		// }
		var result = tags.map(function(a) {return a.text;});
		var meta = new Object();
		var headers = new Object();
		headers.tags = result.join(" ");
		headers.limit = 40;
		meta.headers = headers;
		console.log(headers);
		meta = {
			params : headers
		}
		console.log(meta);
		axios.get("http://localhost:4000/api/events/search/tags",meta)
		.then((response) => {
			// let fetched = splitEvents(response.data,10);
			console.log("fetching events");
			dispatch({type: FETCH_EVENTS_FULFILLED, payload: response.data});
		})
		.catch((err) => {
			// dispatch({type: FETCH_EVENTS_FULFILLED, payload: events});
			console.log(err);
		});
	}
}

// export function fetchSuggestTags(){
// 	return function(dispatch) {
// 		let events = [];
// 		for (var i = 0; i < 10; i++) {
// 			events[i] = {name: 'name1', id: {i}, subTitle: 'subTitle', imageURL: '../../images/event1.jpg', size: 3, price: 3.95, rating: 4, tags: ['super','awesome','cool','music']};
// 		}
// 	    let eventslist = [];
// 	    for (var i = 0; i < 6; i++) {
// 			eventslist[i] = events;
// 		}
// 		axios.get("http://localhost:4000/api/tags/search/all")
// 		.then((response) => {
// 			let lists = splitEvents(response.data,10);
// 			console.log("fetching events");
// 			dispatch({type: 'FETCH_EVENTS_FULFILLED', payload: lists});
// 		})
// 		.catch((err) => {
// 			dispatch({type: 'FETCH_EVENTS_FULFILLED', payload: eventslist});
// 			console.log(err);
// 		});
// 	}
// }