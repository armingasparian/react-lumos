import React from 'react';
import {useEffect} from 'react';

import AuthRegister from './../operations/auth/AuthRegister.jsx';
import AuthHeader from './../operations/auth/AuthHeader.jsx';
import AuthRightBar from './../operations/auth/AuthRightBar.jsx';


export default function Membership() {
  useEffect(() =>{
    document.title = 'LUMOS ll Անդամագրություն'
  }, [])
  return (
    <div id="login">
      <AuthHeader />
      <AuthRightBar />
      <AuthRegister />
    </div>
  );
}