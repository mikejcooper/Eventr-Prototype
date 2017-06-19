import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import css from './SignUpModal.css'
import TextFieldGroup from 'client/Components/common/TextFieldGroup';
import FacebookSocialLogin from '../SocialComponents/FacebookSocialLogin'
import { connect } from "react-redux";
import { userSignInRequest } from 'actions/signupActions'
import { Textfit } from 'react-textfit';




// Maps dispatcher to props
@connect()
class SignUpModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      signInRequest: false,
    }
    this.renderSignInSpinner = this.renderSignInSpinner.bind(this);
    this.onChange = this.onChange.bind(this);
    this.signIn = this.signIn.bind(this)

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signIn(){
    this.setState({ signInRequest: true });
    this.props.dispatch(userSignInRequest(this.state.username, this.state.password));
  }


  renderSignInSpinner() {
    if(this.state.signInRequest){
      return (
        <div class="div">
          Checking login...
        </div>
      )
    } 

    if(this.props.loginSucess){
      return (
        <div class="div">
          Login Sucess!
        </div>
      )
    } 

    if(this.props.loginFailed){
      return (
        <div class="div">
          Login Failed!
        </div>
      )
    } 
  }

  render() {
    const modalInstance = (

        <div class="modal-fade">
          <Modal class="signIn-modal" show={this.props.showModal} onHide={this.props.closeModal} >
            <Modal.Body>
              <div class="data-container">

                <div class="welcome-message">
                  <h3 class="text-center">Welcome Back!</h3>
                  <p class="text-center">We've been waiting to show you all the new events we found.</p>
                </div>

                <br/>


                <div class="login-container">

                  <div class="social-buttons-container">
                        <FacebookSocialLogin/>
                  </div>

                  <br/>

                  <div class="login">

                    <form onSubmit={this.onSubmit}>

                      <TextFieldGroup
                        label="Username"
                        field="username"
                        value={this.state.username}
                        onChange={this.onChange}
                      />

                      <TextFieldGroup
                        label="Password"
                        field="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />

                    </form>
                  </div>

                  <div class="centre">
                    <a href="https://en.wikipedia.org/wiki/Password" class="">
                      <p class="text-center">Forgotten your password?</p>
                    </a>
                  </div>

                  <div class="centre">
                    Don't have an account? &nbsp;
                    <a href="/signup">
                      <span class="i-gplus icon"></span>
                      <span class="text">Sign Up</span>
                    </a>
                  </div>
                </div>




              </div>

            </Modal.Body>
          <Modal.Footer>
            <div class="modal-footer-container">
              <Button class = "left" onClick={this.props.closeModal}>Close</Button>
              <Button class = "right button-red" onClick={this.signIn}>Sign Up</Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );

    if(this.props.showModal){
      return modalInstance;
    } else{
      return null;
    }
  }
}
export default SignUpModalContainer;
