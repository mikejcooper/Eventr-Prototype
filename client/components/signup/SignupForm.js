import React from 'react';
import timezones from '../../modules/data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import axios from 'axios';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.CheckAccountExists = this.CheckAccountExists.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });

    }
    this.CheckAccountExists(this.state.email)

  }

  CheckAccountExists(email){
    axios.get("http://localhost:4000/api/users/" + email)
      .then((response) => {
        console.log("HERE   " + JSON.stringify(response) )
        if(response['data'] == 0){
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome! Sign in to access your account.'
          });

          this.props.userSignupRequest(this.state).then(
            () => {
              this.context.router.push('/signUp');
            },
            ({ data }) => this.setState({ errors: data, isLoading: false })
          );

        } else {
          this.props.addFlashMessage({
            type: 'error',
            text: 'Email address is already being used.'
          });
        }
      })
      .catch((err) => {
        // dispatch({type: FETCH_EVENTS_FULFILLED, payload: events});
        console.log(err);
      });
  }

  render() {
    const { errors } = this.state;
    const options = map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>

        <TextFieldGroup
          error={errors.first_name}
          label="First Name"
          onChange={this.onChange}
          value={this.state.first_name}
          field="first_name"
        />

        <TextFieldGroup
          error={errors.last_name}
          label="Last Name"
          onChange={this.onChange}
          value={this.state.last_name}
          field="last_name"
        />

        <TextFieldGroup
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          value={this.state.email}
          field="email"
        />

        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          type="password"
        />

        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
          type="password"
        />

        <div className={classnames("form-group", { 'has-error': errors.timezone })}>
          <label className="control-label">Timezone</label>
          <select
            className="form-control"
            name="timezone"
            onChange={this.onChange}
            value={this.state.timezone}
          >
            <option value="" disabled>Choose Your Timezone</option>
            {options}
          </select>
          {errors.timezone && <span className="help-block">{errors.timezone}</span>}
        </div>

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SignupForm;
