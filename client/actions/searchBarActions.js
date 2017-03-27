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

const results = {

}

export function searchWithSearchBar(tags){
	return function(dispatch) {
		let events = [];
	    events[0] = {title: 'Super awesome Event', subTitle: 'subTitle', imageURL: '../../images/event1.jpg', size: 3, price: 3.95, rating: 4, tags: ['super','awesome','cool','music']};
	    events[1] = {title: 'Super Event', subTitle: 'sub', imageURL: '../../images/event1.jpg', size: 3, price: 3.95, rating: 4, tags: ['super','njmyn','rnhh','musgsfvfsic']};
	    events[2] = {title: 'Super awesome Event', subTitle: 'haha', imageURL: '../../images/event1.jpg', size: 2, price: 2.00, rating: 4, tags: ['way','too','comp','ddsmwmc']};
	    events[3] = {title: 'Super awesome Event', subTitle: 'nkjcn', imageURL: '../../images/event1.jpg', size: 4, price: 1.95, rating: 4, tags: ['evfs','vsfv','cfvdfvool','vdsfv']};
	    events[4] = {title: 'Super awesome Event', subTitle: 'nkjcn', imageURL: '../../images/event1.jpg', size: 4, price: 1.95, rating: 4, tags: ['evfs','vsfv','cfvdfvool','vdsfv']};
	    events[5] = {title: 'Super awesome Event', subTitle: 'nkjcn', imageURL: '../../images/event1.jpg', size: 4, price: 1.95, rating: 4, tags: ['evfs','vsfv','cfvdfvool','vdsfv']};
	    events[6] = {title: 'Super awesome Event', subTitle: 'nkjcn', imageURL: '../../images/event1.jpg', size: 4, price: 1.95, rating: 4, tags: ['evfs','vsfv','cfvdfvool','vdsfv']};
	    events[7] = {title: 'Super awesome Event', subTitle: 'nkjcn', imageURL: '../../images/event1.jpg', size: 4, price: 1.95, rating: 4, tags: ['evfs','vsfv','cfvdfvool','vdsfv']};
	    events[8] = {title: 'Super awesome Event', subTitle: 'nkjcn', imageURL: '../../images/event1.jpg', size: 4, price: 1.95, rating: 4, tags: ['evfs','vsfv','cfvdfvool','vdsfv']};
	    events[9] = {title: 'Super awesome Event', subTitle: 'nkjcn', imageURL: '../../images/event1.jpg', size: 4, price: 1.95, rating: 4, tags: ['evfs','vsfv','cfvdfvool','vdsfv']};
	    let eventslist = [];
	    eventslist[0] = events;
	    eventslist[1] = events;
	    eventslist[2] = events;
	    eventslist[3] = events;
	    eventslist[4] = events;
	    eventslist[5] = events;
	    dispatch({type: 'FETCH_EVENTS_FULFILLED', payload: eventslist});
		// axios.get('http://rest.learncode.academy/api/test123/tweets', {
		// 		params: tags
		// 	})
		// .then(function (response) {
		// 	console.log(response);
		// 	dispatch({type: 'FETCH_EVENTS_FULFILLED', payload: response});
		// })
		// .catch(function (error) {
		// 	dispatch({type: 'FETCH_EVENTS_REJECTED', payload: error})
		// 	console.log(error);
		// });
	}
}