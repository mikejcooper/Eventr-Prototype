import React from 'react';
import Spinner from 'react-spinkit';


class Playground extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
    };
    this.getHTML = this.getHTML.bind(this);
  }

  getHTML(){
    return <Spinner spinnerName='three-bounce' />
  }


  render() {
    
    setTimeout(function() { 
      this.setState({isFetching: false}); 
    }.bind(this), 3000);

   

    return (
      <div>
      {this.state.isFetching ? 'Fetching' : this.getHTML()}
      <Spinner spinnerName='three-bounce' />
        <section class="bg-primary" id="testing">
          <h2 class="section-heading">{this.state.header}</h2>
          <h2 class="section-heading">Header A</h2>
          <h2 class="section-heading">Header A</h2>
          <h2 class="section-heading">Header A</h2>
          <h2 class="section-heading">Header A</h2>
        </section>
        </div>
    )
  }
}

export default Playground;
