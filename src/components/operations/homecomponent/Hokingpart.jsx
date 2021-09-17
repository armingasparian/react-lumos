import React from 'react';
import { Link } from 'react-router-dom';
import courseCategories from '../../../assets/images/icons/courseCategories.png';
import whyusicon from '../../../assets/images/icons/whyusicon.png';
import pic1 from '../../../assets/images/icons/whyicon1.png';
import pic2 from '../../../assets/images/icons/whyicon2.png';
import pic3 from '../../../assets/images/icons/whyicon3.png';
import Button from "../../Button";

export default class Hokingpart extends React.Component {
  state = {
    whywewe : [
      {
        img: pic1,
        heading: ['Դիմիր Առցանց'],
        section: ['Չես ուզում տանից դուրս գալ, բայց ունակ ես սովորելու, դիմի՛ր մեզ, միացի՛ր մեր թիմին։']
      },
      {
        img: pic2,
        heading: ['Աջակցություն'],
        section: ['Ցանկացած հարցերի և աջակցության համար մենք պարտավոր ենք լինել ձեր կողքին ամեն պահին։']
      },
      {
        img: pic3,
        heading: ['Հավաստագրում'],
        section: ['Յուրաքանչյուր դասընթացի ավարտից հետո կմասնագիտանաս ու ձեռք կբերես մեր հավաստագիրը՝ ապահովելով կայուն որակ և երջանիկ ապագա։']
      }
    ]
  }
  render() {
    return (
      <div>
        <div className="coursesection">
          <h4>Բարի գալուստ մեր թիմ</h4>
          <h3>Դասընթացի կատեգորիաները</h3>
          <p className="p1">Տիեզերքի գաղտնիքները բացահայտելու լավագույն ճանապարհը՝ ծրագրավորում սովորելն է։</p>
          <p className="p2">&copy; Սթիվեն Հոքինգ</p>
          <small >/ֆիզիկոս-տեսաբան, տիեզերաբան/</small>
        </div>
        <div className="picsection"> 
          <Link to='courses/html' target="_blank">
            <div className="coursehtml" id="courses">
              <div className="coursecontent">
                <img src={courseCategories}/>
                <p>HTML</p>
              </div>
            </div>
          </Link>
          <Link to='courses/css' target="_blank">
          <div className="coursecss" id="courses">
              <div className="coursecontent">
                <img src={courseCategories}/>
                <p>CSS</p>
              </div>
            </div>
          </Link>
          <Link to='courses/js' target="_blank">
          <div className="coursejs" id="courses">
              <div className="coursecontent">
                <img src={courseCategories}/>
                <p>JavaScript</p>
              </div>
            </div>
          </Link>
          <Link to='courses/php' target="_blank">
          <div className="coursephp" id="courses">
              <div className="coursecontent">
                <img src={courseCategories}/>
                <p>PHP</p>
              </div>
            </div>
          </Link>
          <Link to='courses/mysql' target="_blank">
          <div className="coursemysql" id="courses">
              <div className="coursecontent">
                <img src={courseCategories}/>
                <p>MySQL</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="button-click">
          <Button name='Կուրսեր' link='/courses'/>
        </div>
        <div className="whyus">
          <div>
            <h4>Ինչո՞ւ ընտրել մեզ</h4>
            <h1>Ինչո՞ւ է պետք կրթությունը</h1>
            <img className="whyusicon" src={whyusicon}/>
            <div className="whywe"> 
            {
              this.state.whywewe.map((e,i) => {
                return(  
                 <div className='why'>
                   <div>
                     <img src={e.img} alt=""/>
                   </div>  
                   <div>
                     <h4>{e.heading}</h4>
                   </div>  
                   <div>
                     <p>{e.section}</p>
                   </div>  
                 </div>
                )
               })
            }
            </div>
          </div>  
        </div>
      </div>
    )
  }
}