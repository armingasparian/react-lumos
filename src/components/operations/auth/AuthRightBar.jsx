import React from 'react';

import AuthRightImg from "../../../assets/images/pics/auth-right-img.jpg";

export default class AuthLogin extends React.Component {
  state = {
    AuthRightImg: AuthRightImg,
  }
  render() {
    return (
        <div className="auth-right-img">
          <img src={this.state.AuthRightImg}/>
        </div>
    )
  }
}