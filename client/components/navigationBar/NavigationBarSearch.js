import React from 'react';
import { connect } from "react-redux";
import css from './NavigationBarSearch.css';
import NavigationBarSearchResults from './NavigationBarSearchResults'


// Maps dispatcher to props
@connect()
class NavigationBarSearch extends React.Component {
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

    if(1 == 0) {
      return (
        <div>
          <NavigationBarSearchResults/>
        </div>
      )
    }
    else {
      return (
        <div class="navigation-bar-search flex-centre">
          <div class="nav-container">
            <div class="bar-container flex-centre">
              <div class="input-container"><input onClick={() => console.log("render bigger field")} type="text"
                                                  class="input" placeholder="Venue, activity or location"/></div>
              {/*<input type="text" class="bar" placeholder=" Search..." ref="textInput" onKeyUp={(event) => this.onSearchBarChange(event)} required/>*/}
            </div>
            <div class="search-button-container flex-centre">
              <div class="search-button button-red cursor"><a href="search"><img class="search-icon resize-img" src="http://localhost:2000/images/search-icon.png"></img></a>
              </div>
            </div>
          </div>
        </div>
      );
    }


  }
}

export default NavigationBarSearch
