import React from 'react';

import AuthHeader from './AuthHeader.jsx';

export default class ContactBlock extends React.Component {
  state = {
    contactForm: [
      { type: "text", name: "name", placeholder: "Անուն"},
      { type: "text", name: "name", placeholder: "Ազգանուն"},
      { type: "email", name: "name", placeholder: "Էլեկտրոնային Հասցե"},
      { type: "number", name: "name", placeholder: "Հեռախոսահամար"}
    ],
  }
  render() {
    return (
        <div className="contactPage">
          <AuthHeader />
          <div className="contact-body">
            <h1>Հետադարձ կապ</h1>
            <form>
              {
                this.state.contactForm.map((e) => {
                  return(                   
                    <input className="input" type={e.type} name={e.name} placeholder={e.placeholder}/>            
                  )
                })
              }
              <textarea className="input" name="oppinion" placeholder="Ձեր Կարծիքը ..."/>     
              <button type="submit" name="send">Ուղարկել</button> 
            </form>
          </div>
        </div>
    )
  }
}