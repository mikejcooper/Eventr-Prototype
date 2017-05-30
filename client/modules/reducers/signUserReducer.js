import { FETCH_SIGNUP_REQUEST, SIGNIN_SUCESS, SIGNIN_NOT_SUCESS } from '../actions/types';

const initialState = {
  isLoggingIn : false,
  loginSucess : false,
  loginFailed: false,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SIGNUP_REQUEST: 
      break
    case SIGNIN_SUCESS: 
      state = {...state, loginSucess : true}
      break
    case SIGNIN_NOT_SUCESS: 
      state = {...state, loginFailed : true}
      break
     
    // case CLOSE_SIGN_IN_MODAL:
    //   state = {...state, signInBool: false}
    //   break

   }
  return state
}


