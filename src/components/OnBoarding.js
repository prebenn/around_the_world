import React from "react";
import { Slide } from 'react-slideshow-image';

function OnBoarding () {

  //Dette er slideshowet som er til on boardingen, hentet inn fra en tredjepart. 
  //https://www.npmjs.com/package/react-slideshow-image

    const slideImages = [
        'onBoard1.jpg',
        'onBoard2.jpg',
        'onBoard3.jpg',
        'onBoard4.jpg'
      ];
       
      const properties = {
        duration: 500000,
        transitionDuration: 500,
        infinite: false,
        indicators: true,
        arrows: true,
        pauseOnHover: true,
        onChange: (oldIndex, newIndex) => {
          console.log("hello friend:)");
        }
      }

    return (
        <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            </div>
          </div>
        </Slide>
      </div>

    );
}

export default OnBoarding;