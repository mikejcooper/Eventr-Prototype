import React from 'react';
import NavigationBar from './navigationBar/NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {
  constructor() {
    super()
  }

  render() {

  	const containerStyle = {
      marginTop: "60px" // Allow children to render without hitting nav bar
    };
    return (
    	<div class="container" style={containerStyle} >
          <div class="row">
             <div class="col-lg-12">
		        <NavigationBar/>
		        <FlashMessagesList />
		        {this.props.children}
	        </div>
          </div>
        </div>
    );
  }	
}

export default App;
