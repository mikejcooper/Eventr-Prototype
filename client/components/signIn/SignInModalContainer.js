import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class SignInModalContainer extends React.Component { 
  render() {
    console.log(this.props.showModal)
    const modalInstance = (
      <div className="static-modal">
        <Modal.Dialog>


          <Modal.Body>
            One fine body...
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
