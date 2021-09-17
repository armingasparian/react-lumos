import React from 'react';
import { Link } from 'react-router-dom';

import contactStar from './../../../assets/images/icons/contactstar.png';

export default class AuthHeader extends React.Component {
  state = {
    contactStar: contactStar,
  }
  render() {
    return (        
      <div className="auth-header">
        <Link to="/">
          <img src={this.state.contactStar}/>
        </Link>
        <Link to="/">
          <p>Գլխավոր</p>
        </Link>
      </div>      
    )
  }
}