import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import css from './main.css'
import TextFieldGroup from '../common/TextFieldGroup';
import FacebookSocialLogin from './FacebookSocialLogin'
import GoogleSocialLogin from './GoogleSocialLogin'


class SignInModalContainer extends React.Component { 

  render() {
    console.log(this.props.showModal)
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
                  />
                   <TextFieldGroup
                    label="Password"
                    field="password"
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
            <Button class = "" onClick={this.props.closeModal}>LOGIN IN</Button>
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
