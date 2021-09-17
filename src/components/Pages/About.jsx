import React from 'react';
import {useEffect} from 'react';
import Author from "../SubPages/Author.jsx";
import Books from "../SubPages/Books.jsx";

export default function About() {
  console.log('render')
  useEffect(() =>{
    document.title = 'LUMOS ll Մեր Մասին'
  }, [])
  return (    
    <div id="about">
      <title>About</title>
      <h2>About Us</h2>
      <Author />
      <Books />
    </div>
  );
}