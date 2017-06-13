import { CLOSE_SIGN_IN_MODAL, OPEN_SIGN_IN_MODAL, CLOSE_EVENT_MODAL, OPEN_EVENT_MODAL } from 'actions/types';

const initialState = {
  signInBool : false,
  eventBool : false, 
  event_modal_data: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case OPEN_SIGN_IN_MODAL: 
      state = {...state, signInBool: true}
      break
     
    case CLOSE_SIGN_IN_MODAL:
      state = {...state, signInBool: false}
      break

    case OPEN_EVENT_MODAL: 
      state = {...state, eventBool: true, event_modal_data: action.event_data}
      break
     
    case CLOSE_EVENT_MODAL:
      state = {...state, eventBool: false}
      break
   }
  return state
}