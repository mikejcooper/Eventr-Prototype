import React from 'react';
import { IndexLink, Link } from 'react-router';
import { openSignInModal } from '../../actions/modalActions';
import {searchWithSearchBar} from  '../../actions/searchBarActions';
import { connect } from "react-redux";
import css from './NavigationBar.css';


// Maps dispatcher to props
@connect()
class NavigationBar extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
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

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  handleSearchClick(){
    this.props.dispatch(searchWithSearchBar([]));
  }

  onSubmit() {
    console.log("onsubmit called");
    console.log(this.refs.searchInput.value);
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
    const { location } = this.props;
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";
    var navOpacity = {
      opacity: this.state.ScrollState,
    };

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style = {navOpacity} onScroll={this.handleScroll.bind(this)}>
        <div class="container">
          <div class="navbar-header fixed my-button">
            <img class="search-icon"  onClick={this.handleSearchClick} src={require("../../images/search-icon.png")}/>
          </div>
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand inverted" href="/#"><img src={require("../../images/logo.png")} alt="Dispute Bills"></img></a>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              <li >
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li >
                <Link to="/signup" onClick={this.toggleCollapse.bind(this)}>Sign Up</Link>
              </li>
              <li >
                <Link onClick={this.toggleCollapse.bind(this), this.openSignInModal.bind(this)}>Sign In </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar


// <div class="search-bar-container">
//     <input type="text" ref="searchInput" class="form-control search-Bar my-search-input"  placeholder="Search" name="q"></input>
//     <button class="btn btn-default search-Btn" type="submit" onClick={this.onSubmit}><i class="glyphicon glyphicon-search" ></i></button>
// </div>

// <Link class="my-button" onClick={this.toggleCollapse.bind(this)} to="/search"></Link>

