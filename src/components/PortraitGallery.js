import React from "react";
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
            <div className="dots six wide column" style={{ display: "block" }}>
              <div className="ui vertical button">
                <button className="ui button">
                  <Dot slide={0}>
                    <Image src={eleanor} style={{ maxWidth: "50px" }} />
                  </Dot>
                </button>
                <button className="ui button">
                  <Dot slide={1}>
                    <Image src={eleanor} style={{ maxWidth: "50px" }} />
                  </Dot>
                </button>
              </div>
            </div>
            <div className="slider ten wide column">
              <Slider>
                <Slide index={0}>
                  1
                  <Image src={eleanor} />
                </Slide>
                <Slide index={1}>
                  2
                  <Image src={eleanor} />
                </Slide>
              </Slider>
            </div>
          </div>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default PortraitGallery;
