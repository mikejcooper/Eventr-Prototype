// import { OPEN_SIGN_IN_MODAL, CLOSE_SIGN_IN_MODAL } from '../actions/types';

// export default function reducer(state=[
// 		{signIn:{ bool: false, } },
//   ], action = {}) {

//   switch(action.type) {
//     case OPEN_SIGN_IN_MODAL:
//       console.log("hello")
//      	return [
//           ...state,
//           {signIn: { bool: true }},
//       ] 
//     case CLOSE_SIGN_IN_MODAL:
//       return [
//           ...state,
//           {signIn: { bool: false }},
//         ]  
//   }
//   return state;

// }

import { OPEN_SIGN_IN_MODAL, CLOSE_SIGN_IN_MODAL } from '../actions/types';

export default function reducer(state=[
		 {bool: false}
  ], action = {}) {

  switch(action.type) {
    case OPEN_SIGN_IN_MODAL:
      console.log("hello")
     	return [
          ...state, {bool: true}
      ] 
    case CLOSE_SIGN_IN_MODAL:
      return [
          ...state, {bool: true}
        ]  
  }
  return state;

}