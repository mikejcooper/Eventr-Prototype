import React from 'react';
import { connect } from 'react-redux';
import SignInModalContainer from './SignInModalContainer'
import { closeSignInModal } from '../../actions/modalActions'


@connect((store) => {
  return {
    modalSignIn: store.modal.signInBool,
    loginSucess:store.user.loginSucess,
    loginFailed:store.user.loginFailed
  };
})
class SignInModal extends React.Component {
  constructor () {
    super()
    this.state = { showModal: false, loginFailed: false }
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal(){
    this.props.dispatch(closeSignInModal());
  }


  render() {
    this.state.showModal = this.props.modalSignIn
    this.state.loginFailed = this.props.loginFailed
    if(this.props.loginSucess){
      this.closeModal
    }

    return(
      <SignInModalContainer showModal = {this.state.showModal} closeModal = { this.closeModal } loginFailed = {this.state.loginFailed}/>
    )
  }
}

export default SignInModal;
    
