import React from 'react';
import {useEffect} from 'react';

export default function Js() {
  useEffect(() =>{
    document.title = 'LUMOS ll JavaScript'
  }, [])
  return (
    <div id="js">
      <h2>Js</h2>
    </div>
  );
}