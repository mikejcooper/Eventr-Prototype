import {FETCH_SUGGESTTAGS_SEARCH_BAR, ADD_TAG_SEARCH_BAR, DELETE_TAG_SEARCH_BAR, FETCH_EVENTS_FULFILLED, FETCH_EVENTS_REJECTED} from '../actions/types';

const initialState = {
	tags : [],
	suggestTags : [],
	events : []
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ADD_TAG_SEARCH_BAR:
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
      	return {
	          ...state,
	          tags: state.tags.filter(tag => tag.text !== action.payload),
	        };
        break;
	case FETCH_EVENTS_REJECTED: 
		return {...state}
		break;
	case FETCH_EVENTS_FULFILLED: 
		return {
		  ...state,
		  events: action.payload,
		}
		break;
	case FETCH_SUGGESTTAGS_SEARCH_BAR:
		return {
			...state,
			suggestTags: action.payload,
		}
	

    default: 
    	return state;
  }
}
