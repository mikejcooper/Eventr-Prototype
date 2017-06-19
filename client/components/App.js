import React from 'react';
import NavigationBar from './navigationBar/NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';
import SignInModal from './modals/signIn/SignInModal';
import SignUpModal from './modals/signUp/SignUpModal';
import EventModal from './EventModal/EventModal';
import { connect } from "react-redux";
import css from './App.css';


@connect((store) => {
  return {
    isSignInModalOpen: store.modal.signInOpen,
    isEventModalOpen: store.modal.eventOpen
  };
})
class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    console.log("Starting website...")

    let opacityVal = 1;

    if(this.props.isSignInModalOpen || this.props.isEventModalOpen){
      opacityVal = 0.6
    }
    
    const containerStyle = {
      marginTop: '50px', // Allow children to render without hitting nav bar
      overflow: 'hidden',
      width:'100%'
    };

    const fadeStyle = {
      opacity: opacityVal, // Fade webpage if modal is open
    };

    return (
      <div style={containerStyle} >
          <div class="row">
             <div class="col-lg-12">
              <NavigationBar/>
              <FlashMessagesList />
              <SignInModal/>
              <SignUpModal/>
              <EventModal/>
              <div style={fadeStyle}>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
    );
  } 
}

export default App;

