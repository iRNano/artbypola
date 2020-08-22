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
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import carouselImage from "../assets/images/home_image.png";

const Dashboard = () => {
  return (
    <div
      className="dashboard"
      style={{ paddingTop: "1em", paddingBottom: "3em" }}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={45}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <Image src={carouselImage} style={{ maxWidth: "1284px" }} />
          </Slide>
          {/* <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide> */}
        </Slider>
        {/* <Dot slide={0}>1</Dot>
        <Dot slide={1}>2</Dot>
        <Dot slide={2}>3</Dot> */}
      </CarouselProvider>
    </div>
  );
};

export default Dashboard;
