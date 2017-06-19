import React from 'react';
import { IndexLink, Link } from 'react-router';
import { openSignInModal } from 'actions/modalActions';
import { openSignUpModal } from 'actions/modalActions';
import {searchWithSearchBar} from  'actions/searchBarActions';
import { connect } from "react-redux";
import NavigationBarSearch from './NavigationBarSearch';
import SignUpButton from 'svg/SignUpButton';
import css from './NavigationBar.css';

// Maps dispatcher to props
@connect()
class NavigationBar extends React.Component {
  constructor() {
    super()
    this.state = {
      ScrollState: 1,
      searching: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  openSignInModal() {
    this.props.dispatch(openSignInModal());
  }

  openSignUpModal() {
    this.props.dispatch(openSignUpModal());
  }

  handleSearchClick(){
    this.props.dispatch(searchWithSearchBar([]));
  }

  onSubmit() {
    let tags = this.refs.searchInput.value.split(',');
    this.props.dispatch(searchWithSearchBar(tags));
  }

  handleScroll(event) {
    var scrollTopSetPoint = 800;
    var targetOpacity = 0.5;
    var scrollTop = event.target.body.scrollTop;
    if(scrollTop > scrollTopSetPoint) {
      this.setState({ ScrollState: targetOpacity });
    } else {
      this.setState({ ScrollState: Math.max(1 - (scrollTop)/scrollTopSetPoint , targetOpacity).toString()});
    }
  }

  render() {
    var navOpacity = {
      opacity: this.state.ScrollState,
    };

    return (
        <nav class="navbar1 navbar-fixed-top" style = {navOpacity} onScroll={this.handleScroll.bind(this)}>
          <div class="logo-container">
            <a href="/#"><img class="logo resize-img" src="http://localhost:2000/images/logo_text.png"></img></a>
          </div>

          <div class="search-container">
            <NavigationBarSearch/>
          </div>

          <div class="right-nav-container">
            <div class="right-nav">

              <div class="nav-div flex-centre min-div"><Link class="no-line" onClick={this.openSignInModal.bind(this)}><h4 class="cursor">Log In</h4></Link></div>
              <div class="nav-div flex-centre min-div"><a onClick={this.openSignUpModal.bind(this)}> <SignUpButton/> </a></div>
              <div class="nav-div flex-centre"><a class="no-line" href="/signup"> <span class="bullet">•••</span> </a></div>

            </div>
          </div>
        </nav>
    );
  }
}

export default NavigationBar

// <img class="navbar-header fixed my-button search-icon" onClick={this.handleSearchClick} src="http://localhost:2000/images/search-icon.png"/>
//  <Link class="navbar-header fixed my-button search-icon" onClick={this.toggleCollapse.bind(this)} to="/search"></Link>
//
// <div class="navbar-header fixed my-button search-icon" onClick={this.handleSearchClick} >

// <div class="search-bar-container">
//     <input type="text" ref="searchInput" class="form-control search-Bar my-search-input"  placeholder="Search" name="q"></input>
//     <button class="btn btn-default search-Btn" type="submit" onClick={this.onSubmit}><i class="glyphicon glyphicon-search" ></i></button>
// </div>

// <a class="navbar-brand inverted" href="/#"><img src={require("../../images/logo.png")} alt="Dispute Bills"></img></a>

// <img class="search-icon"  onClick={this.handleSearchClick} src={require("../../images/search-icon.png")}/>