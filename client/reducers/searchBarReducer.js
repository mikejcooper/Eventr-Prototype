import {ADD_TAG_SEARCH_BAR, DELETE_TAG_SEARCH_BAR, FETCH_EVENTS_FULFILLED, FETCH_EVENTS_REJECTED} from '../actions/types';

const initialState = {
	tags : [],
	suggestTags : [],
	events : []
};

export default (state = initialState, action = {}) => {
	console.log("searchbarreducer called");
	console.log(action.type);
  switch(action.type) {
    case ADD_TAG_SEARCH_BAR:
		console.log("REDUCER: adding tag: " + action.payload.text);
    	let newState = {
      	...state,
		tags:  [...state.tags,
		  		{
		  			id: action.payload.id,
		  			text: action.payload.text
		  	}
		  ]
        }
	    return newState;
	    break;
    case DELETE_TAG_SEARCH_BAR:
    	console.log("REDUCER: deleting tag: " +  action.payload);
      	return {
	          ...state,
	          tags: state.tags.filter(tag => tag.text !== action.payload),
	        };
        break;
	case FETCH_EVENTS_REJECTED: 
		return {...state}
		break;
	case FETCH_EVENTS_FULFILLED: 
	console.log("REDUCER: events fullfilled");
		return {
		  ...state,
		  events: action.payload,
		}
		break;
	

    default: 
    	console.log("REDUCER: default called");
    	return state;
  }
}
