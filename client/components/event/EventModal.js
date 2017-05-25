import React from 'react';
import { connect } from 'react-redux';
import EventModalContainer from './EventModalContainer'
import { closeEventModal } from '../../actions/modalActions'


@connect((store) => {
  return {
    modalEvent: store.modal.eventBool,
    modalData: store.modal.event_modal_data
  };
})
class EventModal extends React.Component {
  constructor () {
    super()
    this.state = { showModal: false, tags: '' }
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal(){
    this.props.dispatch(closeEventModal());
  }

  render() {
    this.state.showModal = this.props.modalEvent
    this.state.tags = this.props.modalData.tags

    return(
      <EventModalContainer showModal = {this.state.showModal} closeModal = { this.closeModal } tags = {this.state.tags}/>
    )
  }
}

export default EventModal;
    
