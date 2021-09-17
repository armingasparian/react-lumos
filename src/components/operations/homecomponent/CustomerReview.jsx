import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cust1 from '../../../assets/images/icons/cust1.png';
import cust2 from '../../../assets/images/icons/cust2.png';
import cust3 from '../../../assets/images/icons/cust3.png';
import cust4 from '../../../assets/images/icons/cust4.png';
import cust5 from '../../../assets/images/icons/cust5.png';
import cust6 from '../../../assets/images/icons/cust6.png';

export default function CarouselComponent() {
  return (
      <div class="carousel-wrapper">
          <Carousel>
            <div className="customerreview">
              <div className="reviews">
                <div>
                  <img src={cust1} />
                </div>
                <div>
                  <p>Շնորհակալություն, կուրսերը հայերեն են բացատրված և հասկանալի են:</p>
                </div>                  
              </div>
              <div className="reviews">
                <div>
                  <img src={cust2} />
                </div>
                <div>
                  <p>Շնորհակալություն վիդեոդասերի համար, որոնք հեշտ ընկալելի ու հեշտ ուսուցողական են:</p>
                </div>                  
              </div>
              <div className="reviews">
                <div>
                  <img src={cust5} />
                </div>
                <div>
                  <p>Օնլայն կրթվելու հարթակ, առանց տանից դուրս գալու և միաժամանակ շատ մատչելի:</p>
                </div>                  
              </div>
            </div>
            <div className="customerreview">
              <div className="reviews">
                <div>
                  <img src={cust3} />
                </div>
                <div>
                  <p>Շնորհակալ եմ, գերազանց աշխատանք եք կատարել, մաղթում եմ նորանոր հաջողություններ:</p>
                </div>                  
              </div>
              <div className="reviews">
                <div>
                  <img src={cust4} />
                </div>
                <div>
                  <p>Հայերեն դասեր շատ էի փնտրում ու չէի գտնում, բայց սա պարզ է ու շատ լավ բացատրված:</p>
                </div>                  
              </div>
              <div className="reviews">
                <div>
                  <img src={cust6} />
                </div>
                <div>
                  <p>Հուսով եմ, որ արդյունքի կհասնեմ, ձեր տված դասերը չեմ մոռանա:</p>
                </div>                  
              </div>
            </div>
          </Carousel>
      </div>
  );
}


// import React from 'react';
// import '../../../assets/css/homecss/CustomerReview.css';
// import cust1 from '../../../assets/images/icons/cust1.png';
// import cust2 from '../../../assets/images/icons/cust2.png';
// import cust3 from '../../../assets/images/icons/cust3.png';
// import cust4 from '../../../assets/images/icons/cust4.png';
// import cust5 from '../../../assets/images/icons/cust5.png';
// import cust6 from '../../../assets/images/icons/cust6.png';

// export default class CounterCourse extends React.Component {
//   state = {
//     customers : [
//       {
//         picture: cust1,
//         review: 'Շնորհակալություն, կուրսերը հայերեն են բացատրված և հասկանալի են:'
//       },
//       {
//         picture: cust2,
//         review: 'Շնորհակալություն վիդեոդասերի համար, որոնք հեշտ ընկալելի ու հեշտ ուսուցողական են:'
//       },
//       {
//         picture: cust3,
//         review: 'Շնորհակալ եմ, գերազանց աշխատանք եք կատարել, մաղթում եմ նորանոր հաջողություններ:'
//       },
//       {
//         picture: cust4,
//         review: 'Հայերեն դասեր շատ էի փնտրում ու չէի գտնում, բայց սա պարզ է ու շատ լավ բացատրած:'
//       },
//       {
//         picture: cust5,
//         review: 'Օնլայն կրթվելու հարթակ, առանց տանից դուրս գալու և միաժամանակ շատ մատչելի:'
//       },
//       {
//         picture: cust6,
//         review: 'Հուսով եմ, որ արդյունքի կհասնեմ, ձեր տված դասերը չեմ մոռանա:'
//       }
//     ], 
//     control:[
//       {
//         count: 1
//       }
//     ]
//   }
//   render() {
//     return (
//       <div>
//         <div className="customerreview">
//         {
//           this.state.customers.map((e,i) => {
//             return(  
//               <div className='reviews'>
//                 <div>
//                   <img src={e.picture} alt=""/>
//                 </div>  
//                 <div>
//                   <p>{e.review}</p>
//                 </div>   
//               </div>
//             )
//           })
//         }
//         </div> 
//         <div className="controler"> {
//           [1,2,3].map((e,i) => {
//               return(  
//                 <div className='items'>
//                   <ul>
//                     <li>{i+1}</li>
//                   </ul>   
//                 </div>
//               )
//             })
//         }
//         </div>
//       </div>
//     )
//   }
// }