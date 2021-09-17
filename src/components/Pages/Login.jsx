import React from 'react';
import {useEffect} from 'react';

import AuthLogin from './../operations/auth/AuthLogin.jsx';
import AuthHeader from './../operations/auth/AuthHeader.jsx';
import AuthRightBar from './../operations/auth/AuthRightBar.jsx';


export default function Login() {
  useEffect(() =>{
    document.title = 'LUMOS ll Մուտք'
  }, [])
  return (
    <div id="login">
      <AuthHeader />
      <AuthRightBar />
      <AuthLogin />
    </div>
  );
}