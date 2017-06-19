import React from 'react';
import { connect } from 'react-redux';
import SignUpModalContainer from './SignUpModalContainer'
import { closeSignInModal } from 'actions/modalActions'



@connect((store) => {
  return {
    modalSignUp: store.modal.signUpOpen
    // loginSucess:store.user.loginSucess,
    // loginFailed:store.user.loginFailed
  };
})
class SignInModal extends React.Component {
  constructor () {
    super()
    this.state = { showModal: false, loginFailed: false }
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal(){
      this.props.dispatch(closeSignUpModal());
  }


  render() {

    this.state.showModal = this.props.modalSignUp
    if(this.props.loginSucess){
      this.closeModal
    }

    return(
      <SignUpModalContainer showModal = {this.state.showModal} closeModal = { this.closeModal } />
    )
  }
}



export default SignInModal;
    
