import React from 'react';
import FacebookLogin from './SocialComponents/facebookComponent'


class FacebookSocialLogin extends React.Component {
  constructor () {
    super()
    this.responseFacebook = this.responseFacebook.bind(this)
  }

  responseFacebook(){
    console.log("denfk")
  }

  render() {
    return(
      <div >

        <FacebookLogin
          appId="281638378963293"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
        >
        </FacebookLogin>
      </div>

    )
  }
}

export default FacebookSocialLogin;

// <img class ="facebook-login" src="https://i.stack.imgur.com/ZW4QC.png"/>

// <input type="image" onClick={onClick} class="facebook-login" src="https://i.stack.imgur.com/ZW4QC.png" />
