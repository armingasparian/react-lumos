import React from 'react';
import { Link } from 'react-router-dom';

export default class AuthLogin extends React.Component {
  state = {
    contactForm: [
      { type: "text", name: "logname", placeholder: "Օգտանուն"},
      { type: "password", name: "password", placeholder: "Գաղտնաբառ"}
    ],
  }
  render() {
    return (
        <div className="loginPage">
          <div className="login-body">
            <h1>Մուտք</h1>
            <form>
              {
                this.state.contactForm.map((e) => {
                  return(                   
                    <input className="input" type={e.type} name={e.name} placeholder={e.placeholder}/>            
                  )
                })
              }
              <button type="submit" name="send">Մուտք</button> 
              <button type="submit" name="send">
                <Link to='/membership'>Անդամագրվել</Link>
              </button> 
            </form>
          </div>
        </div>
    )
  }
}