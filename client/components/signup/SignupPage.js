import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../modules/actions/signupActions';
import { addFlashMessage } from '../../modules/actions/flashMessagesActions';
import axios from 'axios';
import PropTypes from 'prop-types';




class SignupPage extends React.Component {
  render() {
    const { userSignupRequest, addFlashMessage } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} />
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}


export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage);
