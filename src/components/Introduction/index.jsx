import React from 'react'
import './style.css'
import transOne from '../../images/backgroundImg.jpg'
import imageone from '../../images/s1.jpg'
import imagetwo from '../../images/s2.jpg'
import imagethree from '../../images/s3.jpg'
import imagefour from '../../images/s4.jpg'
import imagefive from '../../images/s5.jpg'
import imagesix from '../../images/s6.jpg'
import {Carousel} from '3d-react-carousal'

const Introduction = (props) => {

  let slides = [
    <img  src={transOne} alt="1" />,
    <img  src={imagefour} alt="2" />,
    <img  src={imagefive} alt="3" />,
    <img  src={imagesix} alt="4" />,
    <img src={imageone} alt="5" />
  ];

  return (
    <div className="carouselBox">
      <Carousel slides={slides} autoplay={true} interval={3000}/>
    </div>
  )
}

export default Introduction