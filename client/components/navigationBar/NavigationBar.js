import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';

import css from './NavigationBar.css';

class NavigationBar extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";
    var navOpacity = {
      opacity: this.props.ScrollState,
    };


    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style = {navOpacity}>
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          <a class="navbar-brand" href="/#"><img src="http://res.cloudinary.com/candidbusiness/image/upload/v1455406304/dispute-bills-chicago.png" alt="Dispute Bills"></img></a>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              <li activeClassName="active" onlyActiveOnIndex={true}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li activeClassName="active">
                <Link to="/signup" onClick={this.toggleCollapse.bind(this)}>Sign Up</Link>
              </li>
              <li activeClassName="active">
                <Link to="settings" onClick={this.toggleCollapse.bind(this)}>User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar






