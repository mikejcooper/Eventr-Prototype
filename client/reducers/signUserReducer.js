import { FETCH_SIGNUP_REQUEST } from '../actions/types';

const initialState = {
  signInBool : false,
  eventBool : false, 
  event_modal_data: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SIGNUP_REQUEST: 
      console.log("FETCH_SIGNUP_REQUEST")
      break
     
    // case CLOSE_SIGN_IN_MODAL:
    //   state = {...state, signInBool: false}
    //   break

   }
  return state
}


