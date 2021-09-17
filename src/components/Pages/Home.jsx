import React from 'react';
import {useEffect} from 'react';
import HomeSlider from '../operations/homecomponent/HomeSlider.jsx';
import Hokingpart from '../operations/homecomponent/Hokingpart.jsx';
import CounterCourse from '../operations/homecomponent/CounterCourse.jsx';
import CustomerReview from '../operations/homecomponent/CustomerReview.jsx';

export default function Home() {
  useEffect(() =>{
    document.title = 'LUMOS'
  }, [])
  return (
    <div id="home">
      <HomeSlider />
      <Hokingpart />
      <CounterCourse />       
      <CustomerReview />     
    </div>
  );
}