import { OPEN_SIGN_IN_MODAL, CLOSE_SIGN_IN_MODAL } from '../actions/types';

const initialState = {
	isModalOpen:false,     
	signInBool : false,


};

export default function reducer(state = initialState, action) {
	console.log(state)
  switch(action.type) {
    case OPEN_SIGN_IN_MODAL: 
    	state = {...state, signInBool: true}
    	break
     
    case CLOSE_SIGN_IN_MODAL:
    	state = {...state, signInBool: false}
    	break
   }
  return UpdateIsModalOpenBool(state)

}


function UpdateIsModalOpenBool(state){
  for (var modalBool in state) {
	  if(state.hasOwnProperty(modalBool) && (modalBool != 'isModalOpen')) {
      var bool = state[modalBool];
      if(bool){
      	return {...state, isModalOpen: true} 
      }
	  }
	}
	return {...state, isModalOpen: false} 
};
