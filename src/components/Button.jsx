import React from "react";
import { Link } from "react-router-dom";
import '../assets/sass/Button.scss'

class Button  extends React.Component {
  render() {
    return(
      <div className='click-button'>
        <Link to={this.props.link}>
          <button>{this.props.name}</button>
        </Link>
      </div>
    )
  }
}
export default Button