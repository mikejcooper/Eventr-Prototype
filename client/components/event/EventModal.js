import React from 'react';
import { connect } from 'react-redux';
import EventModalContainer from './EventModalContainer'
import { closeEventModal } from '../../modules/actions/modalActions'
import css from './EventModal.css'



@connect((store) => {
  return {
    modalEvent: store.modal.eventBool,
    modalData: store.modal.event_modal_data
  };
})
class EventModal extends React.Component {
  constructor () {
    super()
    this.state = { showModal: false, tags: ''}
    this.closeModal = this.closeModal.bind(this)
    this.renderOnHover = this.renderOnHover.bind(this);
  }

  closeModal(){
    this.props.dispatch(closeEventModal());
  }

renderTags(tags) {
      var lis = [];
      for (var i=0; i< tags.length; i++) {
          lis.push(<button key={i} class="button-tags"> {tags[i]} </button>);
      }
      return (
          lis
      );
  }

renderVenueSize(size) {
    var lis = []
    for (var i=0; i< size; i++) {
        lis.push(<img key={i} class="personIcon" src="https://openclipart.org/download/202776/pawn.svg" />)
    }
    return (lis)
  }

  renderOnHover(data) {
      return (
            <div class="">
              <div class="tags">{this.renderTags(data.tags)}</div>
              <div class="info">
                <div class="venue-size">{this.renderVenueSize(data.size)}</div>
              </div>
            </div>
        )
  }

  render() {
    this.state.showModal = this.props.modalEvent
    this.state.event = this.props.modalData
    return(
      <EventModalContainer showModal = {this.state.showModal} closeModal = { this.closeModal } event = {this.state.event} renderOnHover = {this.renderOnHover} />
    )
  }
}

export default EventModal;
    
