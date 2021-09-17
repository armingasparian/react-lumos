import React from 'react';
import {useEffect} from 'react';

export default function Html() {
  useEffect(() =>{
    document.title = 'LUMOS ll Html'
  }, [])
  return (
    <div id="html">
      <h2>Html</h2>
    </div>
  );
}