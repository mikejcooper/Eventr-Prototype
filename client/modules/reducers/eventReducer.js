import { GET_EVENT_DATA } from 'actions/types';

const initialState = {
  event_data: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_EVENT_DATA:
      state = {...state, event_data: action.payload}
      break
   }
  return state
}