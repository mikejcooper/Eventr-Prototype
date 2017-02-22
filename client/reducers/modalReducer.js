import { OPEN_SIGN_IN_MODAL, CLOSE_SIGN_IN_MODAL } from '../actions/types';

const initialState = {
    signInBool : false,
};

export default function reducer(state = initialState, action) {

  switch(action.type) {
    case OPEN_SIGN_IN_MODAL: {
    	return {...state, signInBool: true}
     }
    case CLOSE_SIGN_IN_MODAL:
    	return {...state, signInBool: false}
     }
  return state;

}
