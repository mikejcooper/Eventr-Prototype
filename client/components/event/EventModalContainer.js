import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import css from './EventModal.css'
import TextFieldGroup from '../common/TextFieldGroup';


class EventModalContainer extends React.Component { 

  render() {
    console.log(this.props.showModal)
    const modalInstance = (
        <div class="modal-fade">
          <Modal.Dialog>
            <Modal.Body>
              <div class="row">
                <h3 class="text-center">EVENT HERE</h3>
                <p class="text-center">We've been waiting to show you <br></br> all the new events we found.</p>
              </div>

              <div class="row d-flex-centre">
                <div class="left">
                </div>
                <div class="right">
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
                <a href="https://en.wikipedia.org/wiki/Event" class="">
                    <span class="i-gplus icon"></span>
                    <span class="text">LOGIN IN</span>
                </a>
              </div>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.closeModal}>Close</Button>
              <Button bsStyle="primary" onClick={fun => console.log("here")}>Save changes</Button>
            </Modal.Footer>

          </Modal.Dialog>
        </div>
    );

    if(this.props.showModal){
      return (modalInstance);
    } else{
      return null;
    }
  }
}
export default EventModalContainer;

