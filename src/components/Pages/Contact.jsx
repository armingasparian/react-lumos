import React from 'react';
import {useEffect} from 'react';
import ContactBlock from '../operations/auth/ContactBlock.jsx';

export default function Contact() {
  useEffect(() =>{
    document.title = 'LUMOS ll Հետադարձ Կապ'
  }, [])
  return (
    <div id="contact">
      <ContactBlock />
    </div>
  );
}