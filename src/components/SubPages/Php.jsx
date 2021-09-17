import React from 'react';
import {useEffect} from 'react';

export default function Php() {
  useEffect(() =>{
    document.title = 'LUMOS ll Php'
  }, [])
  return (
    <div id="php">
      <h2>Php</h2>
    </div>
  );
}