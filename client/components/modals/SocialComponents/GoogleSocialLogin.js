import React from 'react';
import GoogleLogin from './googleComponent';


class GoogleSocialLogin extends React.Component {
  constructor () {
    super()
    this.responseGoogle = this.responseGoogle.bind(this)
  }

  responseGoogle(){
  }

  render() {
    return(
      <GoogleLogin
        clientId={'658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'}
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        offline={false}
      >        
      </GoogleLogin>
    )
  }
}

export default GoogleSocialLogin;
    


      // <GoogleLogin
      //   clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      //   buttonText="Login"
      //   onSuccess={this.responseGoogle}
      //   onFailure={this.responseGoogle}
      // />