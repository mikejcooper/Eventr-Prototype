import {ADD_TAG_SEARCH_BAR, DELETE_TAG_SEARCH_BAR, FETCH_EVENTS_FULFILLED, FETCH_EVENTS_REJECTED} from '../actions/types';

const initialState = {
	tags : [
		{
			id: 5,
			text: 'text'
		}
	],   
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
    case DELETE_TAG_SEARCH_BAR:
      return {
          ...state,
          tags: state.tags.filter(tag => tag.id !== action.payload),
        };
	case "FETCH_EVENTS_REJECTED": {
		return {...state}
	}
	case "FETCH_EVENTS_FULFILLED": {
		return {
		  ...state,
		  events: action.payload,
		}
	}

    default: return state;
  }
}
