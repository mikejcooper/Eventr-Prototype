import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import css from './main.css'
import TextFieldGroup from '../common/TextFieldGroup';
import FacebookSocialLogin from './FacebookSocialLogin'
import GoogleSocialLogin from './GoogleSocialLogin'
import { connect } from "react-redux";
import { userSignInRequest } from '../../modules/actions/signupActions'



// Maps dispatcher to props
@connect()
class SignInModalContainer extends React.Component { 
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
          <Modal show={this.props.showModal} onHide={this.props.closeModal} >
            <Modal.Body>
              <div class="row">
                <h3 class="text-center">Welcome Back!</h3>
                <p class="text-center">We've been waiting to show you <br></br> all the new events we found.</p>
              </div>

              <div class="row d-flex-centre social-buttons-container">
                <div class="left">
                    <FacebookSocialLogin/>
                </div>
                <div class="right">
                    <GoogleSocialLogin/>
                </div>
              </div>
              <div class="d-flex-centre">

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
              <div class="d-flex-centre">
                <a href="https://en.wikipedia.org/wiki/Password" class="">
                  <p class="text-center">Forgotten your password?</p>
                </a>
              </div>
              <div class="d-flex-centre">
                <a href="/signup" class="">
                    <span class="i-gplus icon"></span>
                    <span class="text">SIGN UP</span>
                </a>
              </div>

          </Modal.Body>
          <Modal.Footer>
            <Button class = "left" onClick={this.props.closeModal}>Close</Button>
            <div class = "d-flex-centre">
              {this.renderSignInSpinner()}
            </div>
            <Button class = "" onClick={this.signIn}>LOGIN IN</Button>
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
export default SignInModalContainer;
