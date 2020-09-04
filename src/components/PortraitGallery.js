import React, { useState, Fragment, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
  Image,
  Button,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import eleanor from "../assets/images/shopitems/Eleanor.png";


const PortraitGallery = ({ photo }) => {
  const [isImageError,setIsImageError] = useState(false)
  const {url, name, price, gallery} = photo;

  const renderGallery = gallery.map((url,index) => {
    return (
      <Dot slide={index} key={index}>
        {!isImageError ? <Image onError={setIsImageError(true)} isBgImage="true" src={url} style={{ maxWidth: "100px" }} /> : <img src={url} style={{ maxWidth: "80px" }}></img>}
      </Dot>
    )
})
  
const renderSlides = gallery.map((url,index) => {
    return(
      <Slide index={index} key={index}>
        {!isImageError ? <Image onError={setIsImageError(true)} isBgImage="true" src={url}  /> : <img src={url} ></img>}
      </Slide>
    )
})
  return (
    <div className="portrait-gallery">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}
      >
        <div
          className="gallery ui grid"
          style={{ display: "flex", minHeight: "50vh" }}
        >
          <div className="row">
            
            <div className="dots four wide column center" style={{ display: "block" }}>
              {gallery? renderGallery : ''}
            </div>
            <div className="slider twelve wide column">
              <Slider>
                {gallery? renderSlides : ''}  
              </Slider>
            </div>
          </div>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default PortraitGallery;
