import React from 'react';
import {useEffect} from 'react';

export default function Author() {
  useEffect(() =>{
    document.title = 'LUMOS ll Հեղինակ'
  }, [])
  return (
    <div id="author">
      <h2>Author</h2>
    </div>
  );
}