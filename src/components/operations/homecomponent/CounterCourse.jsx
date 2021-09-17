import React from 'react';
import logo1 from '../../../assets/images/icons/rolik1.png';
import logo2 from '../../../assets/images/icons/rolik2.png';
import logo3 from '../../../assets/images/icons/rolik3.png';
import logo4 from '../../../assets/images/icons/rolik4.png';
import logo5 from '../../../assets/images/icons/rolik5.png';
import Button from "../../Button";

export default class CounterCourse extends React.Component {
  state = {
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
    count5: 0,
    team : [
      {
        image: logo1,
        count: 0,
        title: 'Մասնագետ'
      },
      {
        image: logo2,
        count: 0,
        title: 'Կուրս'
      },
      {
        image: logo3,
        count: 0,
        title: 'Վիդեոդաս'
      },
      {
        image: logo4,
        count: 0,
        title: 'Ուսանող'
      },
      {
        image: logo5,
        count: 0,
        title: 'Շրջանավարտ'
      }
    ] 
  }  
  
  componentDidMount() {
    setInterval(() => {
      this.setState(e => ({
        count1 : e.team.map((item,i)=> {
          if(i === 0) item.count < 91 ? item.count++ : item.count = 92;
        })
      }));
    }, 30);
    setInterval(() => {
      this.setState(e => ({
        count2 : e.team.map((item,i) => {
          if(i === 1)  item.count < 45 ? item.count++ : item.count = 45;
        })
      }));
    }, 100);
    setInterval(() => {
      this.setState(a => ({
        count3 : a.team.map((item,i) => {
          if(i === 2)  item.count < 288 ? item.count++ : item.count = 288;
        })
      }));
    }, 30);
    setInterval(() => {
      this.setState(a => ({
        count4 : a.team.map((item,i) => {
          if(i === 3)  item.count < 520 ? item.count++ : item.count = 520;
        })
      }));
    }, 20);
    setInterval(() => {
      this.setState(a => ({
        count5 : a.team.map((item,i) => {
          if(i === 4)  item.count < 415 ? item.count++ : item.count = 415;
        })
      }));
    }, 15);
  }

  render() {
    return (
      <div>
        <div className="button-click">
          <Button name='Մեր մասին' link='/about'/>
        </div>
        <div className="rolikaboutus">
						<h4>Մենք հուսալի ենք</h4>
            <h3>Դարձի՛ր մեր թիմի անդամ</h3>
				</div>
        <div className="rolikcounter">
          {
           this.state.team.map((e,i) => {
             return(  
              <div className='teams'>
                <div>
                  <img src={e.image} alt=""/>
                </div>  
                <div>
                  <h3>{e.count}</h3>
                </div>  
                <div>
                  <p>+ {e.title}</p>
                </div>  
              </div>
             )
            })
          }
        </div>
        <div className="button-click">
          <Button name='Անդամագրվել' link='/membership'/>
        </div>
      </div>
    )
  }
}