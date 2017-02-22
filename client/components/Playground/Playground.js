import React from 'react';
import Spinner from 'react-spinkit';
import componentA from './componentA';


class Playground extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
    };
  }

  renderConditionalComponent(){
      if(this.state.isFetching){
        return ( <Spinner spinnerName='three-bounce' /> )
      } else {
        return ( <div>
          <section class="bg-primary" id="testing">
            <h2 class="section-heading">Header A</h2>
            <h2 class="section-heading">Header A</h2>
            <h2 class="section-heading">Header A</h2>
            <h2 class="section-heading">Header A</h2>
          </section>
        </div> )
      } 
  };

  render() {
    setTimeout(function() { 
      this.setState({isFetching: false}); 
    }.bind(this), 5000);

    return (
      <div>
       {this.renderConditionalComponent()}
       </div>
    );
  }
}

//   render() {
    
//     setTimeout(function() { 
//       this.setState({isFetching: false}); 
//     }.bind(this), 3000);

//     return (
//       <div>
//       {this.renderConditionalComponent()}
//       </div>
//     )
//   }
// }

export default Playground;
