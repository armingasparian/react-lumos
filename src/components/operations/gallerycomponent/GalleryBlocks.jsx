import React from 'react';
import { useState } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';

import gallery1 from '../../../assets/images/gallery/1.jpg';
import gallery2 from '../../../assets/images/gallery/2.jpg';
import gallery3 from '../../../assets/images/gallery/3.jpg';
import gallery4 from '../../../assets/images/gallery/4.jpg';
import gallery5 from '../../../assets/images/gallery/5.jpg';
import gallery6 from '../../../assets/images/gallery/6.jpg';
import gallery7 from '../../../assets/images/gallery/7.jpg';
import gallery8 from '../../../assets/images/gallery/8.jpg';
import gallery9 from '../../../assets/images/gallery/9.jpg';
import gallery10 from '../../../assets/images/gallery/10.jpg';
import gallery11 from '../../../assets/images/gallery/11.jpg';
import gallery12 from '../../../assets/images/gallery/12.jpg';
import galleryBg from '../../../assets/images/gallery/gallery-bg.png';

function Gallery() {

 let  pics = [
      { img: gallery1, height: 220, width: 370, imgNumber: "grid1"},
      { img: gallery2, height: 220, width: 340, imgNumber: "grid2"},
      { img: gallery3, height: 220, width: 330, imgNumber: "grid3"},
      { img: gallery4, height: 220, width: 390, imgNumber: "grid4"},
      { img: gallery5, height: 220, width: 310, imgNumber: "grid5"},
      { img: gallery6, height: 220, width: 430, imgNumber: "grid6"},
      { img: gallery7, height: 220, width: 340, imgNumber: "grid7"},
      { img: gallery8, height: 220, width: 350, imgNumber: "grid8"},
      { img: gallery9, height: 220, width: 410, imgNumber: "grid9"},
      { img: gallery11, height: 220, width: 350, imgNumber: "grid10"},
      { img: gallery10, height: 220, width: 340, imgNumber: "grid11"},       
      { img: gallery12, height: 220, width: 330, imgNumber: "grid12"},
    ]

    const [showImage, setShowImage] = useState(false);
    const [tempImg, setTemImg] = useState('');
    
    const getImg = (e) => {
      setTemImg(e);
      setShowImage(true);
    }

    return (
      <>
        <div className={showImage ? "big-image open-image" : "big-image close-image"}>
          <img src={tempImg}/>
          <FaRegTimesCircle onClick={() => setShowImage(false)} />
        </div>
        <div>
          <div className="gallery-bg" style={{ backgroundImage: `url(${galleryBg})`  }}></div>
          <p className="motivate-p">Իմացածիդ ավելացրու նորն ու առաջ շարժվիր</p>
          <div className="gallery-grid">
          {
            pics.map((e,i) => {
              return(
                <div onClick={() => getImg(e.img)}>
                  <img src={e.img} style={{ height: e.height, width: e.width }} className={"gallery-grid-item" + " "+ (e.imgNumber)}/>
                </div>
              )
            })
          }
          </div>
        </div>
      </>  
    )
}

export default Gallery;