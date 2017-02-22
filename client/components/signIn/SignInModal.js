import React from 'react';
import { connect } from 'react-redux';


@connect((store) => {
  return {
    modalSignIn: store.modal
  };
})

class SignIn extends React.Component {
  render() {
    console.log(this.props.modalSignIn);
    if(true){
      return (
       <div>HEYYY</div>
      );
    }
    return null;
  }
}

export default SignIn;



    // const modalInstance = (
    //   <div className="static-modal">
    //     <Modal.Dialog>
    //       <Modal.Header>
    //         <Modal.Title>Modal title</Modal.Title>
    //       </Modal.Header>

    //       <Modal.Body>
    //         One fine body...
    //       </Modal.Body>

    //       <Modal.Footer>
    //         <Button>Close</Button>
    //         <Button bsStyle="primary">Save changes</Button>
    //       </Modal.Footer>

    //     </Modal.Dialog>
    //   </div>
    // );