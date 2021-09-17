import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import steavejobs from '../assets/images/pics/steave-jobs.png';

export default function Footer(){
 
    return(
      <div id="footer">
        <div className="footer-background">
          <div>
          <div className="footer-links">
            <div>
              <Link to='/'>Գլխավոր</Link>
              <Link to='/gallery'>Պատկերասրահ</Link>
              <Link to='/about'>Մեր Մասին</Link>
              <Link to='/courses'>Կուրսեր</Link>
              <Link to='/contact'>Հետադարձ Կապ</Link>
              <Link to='/membership'>Անդամագրվել</Link>
            </div>
            <div>
              <Link to='/html'>HTML</Link>
              <Link to='/css'>CSS</Link>
              <Link to='/js'>JS</Link>
              <Link to='/php'>PHP</Link>
              <Link to='/mysql'>MySQL</Link>
            </div>            
          </div>
          <div className="footer-logo">           
              <img src={steavejobs}/>
          </div>
          <div className="footer-jobs">
            <p>❝ Նորարարությունները տարբերում են առաջնորդներին և հետևորդներին։ 
              <br/>
              Ավելի լավ է ծովահեն լինել, քան սովորական նավաստի ... ❞
            </p>
            <h6>© Սթիվ Ջոբս</h6>            
          </div>
          </div>
       </div>
        <div className="footer-pagination">
          <p>2020 All rights reserved.</p>
          <p style={{paddingLeft: '5px'}}>Created with &nbsp;&nbsp;&nbsp;<FaHeart />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Armine Gasparyan</p>
        </div>
      </div>
    );
}