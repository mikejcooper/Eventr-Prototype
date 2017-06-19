import { OPEN_SIGN_IN_MODAL, OPEN_SIGN_UP_MODAL, OPEN_EVENT_MODAL, CLOSE_SIGN_IN_MODAL, CLOSE_SIGN_UP_MODAL, CLOSE_EVENT_MODAL, } from 'actions/types';

const initialState = {
  signInOpen : false,
  signUpOpen : false,
  eventOpen : false,
  event_modal_data: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case OPEN_SIGN_IN_MODAL: 
      state = {...state, signInOpen: true}
      break

    case OPEN_SIGN_UP_MODAL:
      state = {...state, signUpBool: true}
      break

    case OPEN_EVENT_MODAL:
      state = {...state, eventOpen: true, event_modal_data: action.event_data}
      break

    case CLOSE_SIGN_IN_MODAL:
      state = {...state, signInOpen: false}
      break

    case CLOSE_SIGN_UP_MODAL:
      state = {...state, signUpOpen: false}
      break

    case CLOSE_EVENT_MODAL:
      state = {...state, eventOpen: false}
      break
   }
  return state
}