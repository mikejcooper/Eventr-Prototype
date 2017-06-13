import React from 'react';
import { connect } from "react-redux";
import css from './NavigationBarSearchResults.css';


// Maps dispatcher to props
@connect()
class NavigationBarSearchResults extends React.Component {
  constructor() {
    super()
    this.state = {
      // ScrollState: 1,
      // searching: false
    };
  //   this.handleScroll = this.handleScroll.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);
  //   this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  render() {

    return (
      <div class="navigation-bar-search flex-centre search-expanded">
        <div class="nav-container">
          <div class="bar-container flex-centre">
            <div class="input-container"><input onClick={() => console.log("render bigger field")} type="text" class="input" placeholder="Venue, activity or location"/></div>
            {/*<input type="text" class="bar" placeholder=" Search..." ref="textInput" onKeyUp={(event) => this.onSearchBarChange(event)} required/>*/}
          </div>
        </div>
      </div>
    );

  }
}

export default NavigationBarSearchResults
