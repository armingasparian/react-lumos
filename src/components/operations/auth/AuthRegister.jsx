import React from 'react';
import { Link } from 'react-router-dom';

export default class AuthRegister extends React.Component {
  state = {
    contactForm: [
      { type: "text", name: "name", placeholder: "Մուտքանուն"},
      { type: "text", name: "lastname", placeholder: "Ազգանուն"},
      { type: "email", name: "email", placeholder: "Էլեկտրոնային Հասցե"},
      { type: "number", name: "phone", placeholder: "Հեռախոսահամար"},
      { type: "text", name: "logname", placeholder: "Օգտանուն"},
      { type: "password", name: "password", placeholder: "Գաղտնաբառ"}
    ],
  }
  render() {
    return (
        <div className="registerPage">
          <div className="register-body">
            <h1>Անդամագրվիր Հիմա</h1>
            <form>
              {
                this.state.contactForm.map((e) => {
                  return(                   
                    <input className="input" type={e.type} name={e.name} placeholder={e.placeholder}/>            
                  )
                })
              }
              <button type="submit" name="send">Անդամագրվել հիմա</button> 
              <button type="submit" name="send">
                <Link to='/login'>Մուտք</Link>
              </button> 
            </form>
          </div>
        </div>
    )
  }
}