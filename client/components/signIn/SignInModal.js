import React from 'react';
import { connect } from 'react-redux';
import SignInModalContainer from './SignInModalContainer'


@connect((store) => {
  return {
    modalSignIn: store.modal.signInBool
  };
})
class SignInModal extends React.Component {
    constructor (props) {
    super(props)
    this.state = { showModal: false }
  }
  render() {
    this.state.showModal = this.props.modalSignIn
    console.log(this.props.modalSignIn);

    return(
      <SignInModalContainer showModal = {this.state.showModal}/>
    )
  }
}

export default SignInModal;

    
// @connect((store) => {
//   return {
//     modalSignIn: store.modal.signInBool
//   };
// })

// class SignInModal extends React.Component {
//   render() {
//     const modalInstance = (
//       <div className="static-modal">
//         <Modal.Dialog>
//           <Modal.Header>
//             <Modal.Title>Modal title</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             One fine body...
//           </Modal.Body>

//           <Modal.Footer>
//             <Button>Close</Button>
//             <Button bsStyle="primary">Save changes</Button>
//           </Modal.Footer>

//         </Modal.Dialog>
//       </div>
//     );

//     console.log(this.props.modalSignIn);
//     if(this.props.modalSignIn){
//       return (
//        modalInstance
//       );
//     }
//     return null;
//   }
// }

// export default SignInModal;

    
