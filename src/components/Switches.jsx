import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Gallery from './Pages/Gallery.jsx';
import Courses from './Pages/Courses.jsx';
import Html from './SubPages/Html.jsx';
import Css from './SubPages/Css.jsx';
import Js from './SubPages/Js.jsx';
import Mysql from './SubPages/Mysql.jsx';
import Php from './SubPages/Php.jsx';
import About from './Pages/About.jsx';
import Author from './SubPages/Author.jsx';
import Books from './SubPages/Books.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';
import Membership from './Pages/Membership.jsx';

export default function Switches() {
  return (
    <div id="switches">
      <Route exact path="/"><Home /></Route>
      <Route exact path="/gallery"><Gallery /></Route>
      <Route exact path="/about"><About /></Route> 
      <Route exact path="/about/author"><Author /></Route>
      <Route exact path="/about/books"><Books /></Route> 
      <Route exact path="/courses"><Courses /></Route>
      <Route exact path="/courses/html"><Html /></Route> 
      <Route exact path="/courses/css"><Css /></Route> 
      <Route exact path="/courses/js"><Js /></Route> 
      <Route exact path="/courses/php"><Php /></Route> 
      <Route exact path="/courses/mysql"><Mysql /></Route> 
      <Route exact path="/contact"><Contact /></Route>  
      <Route exact path="/login"><Login /></Route>  
      <Route exact path="/membership"><Membership /></Route>
    </div>
  );
}