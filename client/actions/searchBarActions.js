import axios from "axios";
import {ADD_TAG_SEARCH_BAR, DELETE_TAG_SEARCH_BAR, FETCH_EVENTS_FULFILLED,FETCH_EVENTS_REJECTED} from './types';

export function addTag(id, text) {
  return {
    type: 'ADD_TAG_SEARCH_BAR',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTag(id) {
  return { type: 'DELETE_TAG_SEARCH_BAR', payload: id}
}

function splitEvents(events,size) {
	let lists = [];
	var size = 10;
	for (var i=0; i<events.length; i+=size) {
	    var smallarray = events.slice(i,i+size);
	    lists.push(smallarray);
	}
	return lists;
}

export function searchWithSearchBar(tags){
	return function(dispatch) {
		let events = [];
		for (var i = 0; i < 10; i++) {
			events[i] = {name: 'name1', id: {i}, subTitle: 'subTitle', imageURL: '../../images/event1.jpg', size: 3, price: 3.95, rating: 4, tags: ['super','awesome','cool','music']};
		}
	    let eventslist = [];
	    for (var i = 0; i < 6; i++) {
			eventslist[i] = events;
		}
		axios.get("http://localhost:4000/api/events/search/all")
		.then((response) => {
			let lists = splitEvents(response.data,10);
			console.log("fetching events");
			dispatch({type: 'FETCH_EVENTS_FULFILLED', payload: lists});
		})
		.catch((err) => {
			dispatch({type: 'FETCH_EVENTS_FULFILLED', payload: eventslist});
			console.log(err);
		});
	}
}