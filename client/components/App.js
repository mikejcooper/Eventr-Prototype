import React from 'react';
import NavigationBar from './navigationBar/NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';
import { userScrollEvent } from '../actions/appActions';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ScrollState: 1,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    userScrollEvent(event);

    var scrollTopSetPoint = 800;
    var targetOpacity = 0.5;
    var scrollTop = event.target.body.scrollTop;
    console.log("Here"+scrollTop);
    if(scrollTop > scrollTopSetPoint) {
      this.setState({ ScrollState: targetOpacity });
    } else {
      this.setState({ ScrollState: Math.max(1 - (scrollTop)/scrollTopSetPoint , targetOpacity).toString()});
    }
  }


  render() {
  	const containerStyle = {
      // Allow children to render without hitting nav bar
      marginTop: "60px"
    };
    return (
    	<div class="container" style={containerStyle} onScroll={this.handleScroll.bind(this)}>
          <div class="row">
             <div class="col-lg-12">
		        <NavigationBar ScrollState = {this.state.ScrollState} />
		        <FlashMessagesList />
		        {this.props.children}
	        </div>
          </div>
        </div>
    );
  }	
}

export default App;
