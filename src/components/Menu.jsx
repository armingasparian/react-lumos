import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logoes/logo.png';
import menutoggle from '../assets/images/icons/menu-toggle.png';

export default function Menu() {
  const [open, setOpen] = useState(false)

  return (
      <div id="menu">
        <div>
          <nav>
            <img src={menutoggle} className="menu-toggle" onClick={() => setOpen(!open)} />  
            <div className="logotype">
                <Link to='/'><img src={logo}/></Link>    
            </div>
            {/* <ul style={{display: open && winWidth < 821 ? 'none' : 'flex', alignItems: 'center'}} className="menu-links"> */}
           <ul className={open ? "menu-links close" : "menu-links open"} >
              <li>
                <Link to="/">Գլխավոր</Link>
              </li>
              <li>
                <Link to="/gallery">Պատկերասրահ</Link>
              </li>
              <li className="menu-list">
                <Link to="/about">Մեր Մասին</Link>
                <ul className="menu-drop">
                  <li>
                    <Link to="/about/author">Հեղինակ</Link>
                  </li>
                  <li>
                    <Link to="/about/books">Գրքեր</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-list">
                <Link to="/courses">Կուրսեր</Link>
                <ul className="menu-drop">
                  <li>
                    <Link to="/courses/html">HTML</Link>
                  </li>
                  <li>
                    <Link to="/courses/css">CSS</Link>
                  </li>
                  <li>
                    <Link to="/courses/js">JavaScript</Link>
                  </li>
                  <li>
                    <Link to="/courses/php">PHP</Link>
                  </li>
                  <li>
                    <Link to="/courses/mysql">MySQL</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Հետադարձ Կապ</Link>
              </li>
              <li className="menu-login">
                <Link to="/login">Մուտք</Link>                              
              </li>
              <li className="menu-membership">                
                <Link to="/membership">Անդամագրություն</Link>              
              </li>
            </ul>
          </nav>
        </div>
      </div>
  );
}