import React from 'react';
import {useEffect} from 'react';

export default function Books() {
  useEffect(() =>{
    document.title = 'LUMOS ll Գրքեր'
  }, [])
  return (
    <div id="books">
      <h2>Books</h2>
    </div>
  );
}