import React from 'react';
import { connect } from 'react-redux';
import EventModalContainer from './EventModalContainer'
import { closeEventModal } from '../../actions/modalActions'


@connect((store) => {
  return {
    modalEvent: store.modal.eventBool
  };
})
class EventModal extends React.Component {
  constructor () {
    super()
    this.state = { showModal: false }
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal(){
    this.props.dispatch(closeEventModal());
  }

  render() {
    this.state.showModal = this.props.modalEvent

    return(
      <EventModalContainer showModal = {this.state.showModal} closeModal = { this.closeModal }/>
    )
  }
}

export default EventModal;
    
