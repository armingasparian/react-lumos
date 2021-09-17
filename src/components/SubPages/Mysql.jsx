import React from 'react';
import {useEffect} from 'react';

export default function Mysql() {
  useEffect(() =>{
    document.title = 'LUMOS ll MySql'
  }, [])
  return (
    <div id="mysql">
      <h2>Mysql</h2>
    </div>
  );
}