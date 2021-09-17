import React from 'react';
import {useEffect} from 'react';

export default function Css() {
  useEffect(() =>{
    document.title = 'LUMOS ll Css'
  }, [])
  return (
    <div id="css">
      <h2>Css</h2>
    </div>
  );
}