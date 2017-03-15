import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import css from './main.css'
import TextFieldGroup from '../common/TextFieldGroup';



class SignInModalContainer extends React.Component { 

  render() {
    console.log(this.props.showModal)
    const modalInstance = (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Body>
            <br></br>
            <h3 class="maintext">Good to see you again!</h3>
            <p class="subtext">We've been waiting to show you <br></br> all the new events we found.</p>
            
            <div class="login-buttons facebook-container">
              <div class="login-button google-plus-container attached">
                <a href="https://en.wikipedia.org/wiki/Facebook" class="">
                  <span class="i-facebook icon"></span>
                  <span class="text">SIGN IN</span>
                </a>
              </div>
              <div class="login-button google-plus-container attached">
                <a href="https://en.wikipedia.org/wiki/Google" class="">
                  <span class="i-gplus icon"></span>
                  <span class="text">SIGN IN</span>
                </a>
              </div>
            </div>

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
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModal}>Close</Button>
            <Button bsStyle="primary" onClick={fun => console.log("here")}>Save changes</Button>
          </Modal.Footer>

        </Modal.Dialog>
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

