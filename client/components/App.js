import React from 'react';
import NavigationBar from './navigationBar/NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';
import SignInModal from './signIn/SignInModal';
import { connect } from "react-redux";
import css from './App.css';


@connect((store) => {
  return {
    isModalOpen: store.modal.isModalOpen
  };
})
class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    var opacityVal = 1
    if(this.props.isModalOpen){
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

