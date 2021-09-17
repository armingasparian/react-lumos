import React from 'react';
import {useEffect} from 'react';
import Html from "../SubPages/Html.jsx";
import Css from "../SubPages/Css.jsx";
import Js from "../SubPages/Js.jsx";
import Php from "../SubPages/Php.jsx";
import Mysql from "../SubPages/Mysql.jsx";

export default function Courses() {
  useEffect(() =>{
    document.title = 'LUMOS ll Կուրսեր'
  }, [])
  return (
    <div id="courses">
      <h2>Courses</h2>
      <Html />
      <Css />
      <Js />
      <Php />
      <Mysql />
    </div>
  );
}