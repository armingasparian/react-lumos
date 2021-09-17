import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../assets/App.scss';

import Menu from './Menu.jsx';
import Switches from './Switches.jsx';
import Footer from './Footer.jsx'

export default function App() {
  return(
    <div> 
      <div className="pagescroll">
        <Router >
          <Menu />          
          <Switches />
          <Footer />      
        </Router>        
      </div>     
    </div>
  );
}