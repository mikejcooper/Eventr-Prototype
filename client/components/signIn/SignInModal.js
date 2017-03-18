import React from 'react';
import { connect } from 'react-redux';
import SignInModalContainer from './SignInModalContainer'
import { closeSignInModal } from '../../actions/modalActions'


@connect((store) => {
  return {
    modalSignIn: store.modal.signInBool
  };
})
class SignInModal extends React.Component {
  constructor () {
    super()
    this.state = { showModal: false }
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal(){
    this.props.dispatch(closeSignInModal());
  }

  render() {
    this.state.showModal = this.props.modalSignIn
    console.log(this.props.modalSignIn);

    return(
      <SignInModalContainer showModal = {this.state.showModal} closeModal = { this.closeModal }/>
    )
  }
}

export default SignInModal;
    
