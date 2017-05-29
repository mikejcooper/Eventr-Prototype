import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import css from './EventModal.css'
import TextFieldGroup from '../common/TextFieldGroup';


class EventModalContainer extends React.Component { 


  render() {
    let style_background = { 'backgroundImage': 'url(' + this.props.event.cover_url + ')'}
    console.log(this.props)
    const modalInstance = (
        <div class="">
        <Modal class = "event-modal" show={this.props.showModal} onHide={this.props.closeModal} >
            <div class="cover-image-container">
              <div class="cover-image" style={style_background}/>
              <div class="title">
                <h1>{this.props.event.name}</h1>
              </div>
              <div class = "bottom">
                {this.props.showModal && this.props.renderOnHover(this.props.event)}
              </div>
            </div>
            <Modal.Body>              
                <div class="row description">
                  <h3 class="text-left">Description</h3>
                  <p class="text-left">{this.props.event.description}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
          
        </div>
    );

    if(this.props.showModal){
        console.log("hello");
        return (modalInstance);
    } else{
      return null;
    }
  }
}
export default EventModalContainer;

