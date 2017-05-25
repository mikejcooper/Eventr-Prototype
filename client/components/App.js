import React from 'react';
import NavigationBar from './navigationBar/NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';
import SignInModal from './signIn/SignInModal';
import EventModal from './event/EventModal';
import { connect } from "react-redux";


@connect((store) => {
  return {
    isSignInModalOpen: store.modal.isSignInModalOpen,
    isEventModalOpen: store.modal.isEventModalOpen
  };
})
class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    var opacityVal = 1
    if(this.props.isSignInModalOpen || this.props.isEventModalOpen){
      opacityVal = 0.6
    }
    
    const containerStyle = {
      marginTop: "60px", // Allow children to render without hitting nav bar
    };
    const fadeStyle = {
      opacity: opacityVal // Fade webpage if modal is open 
    };

    return (
      <div class="background" style={containerStyle} >
          <div class="row">
             <div class="col-lg-12">
            <NavigationBar/>
            <FlashMessagesList />
            <SignInModal/>
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

