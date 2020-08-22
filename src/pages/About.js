import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/shared/Breadcrumb";
import PortraitList from "../components/PortraitList";
import AboutDetails from "../components/AboutDetails";

const About = () => {
  return (
    <div className="about">
      <Breadcrumb link="about" />

      <h1>ABOUT</h1>
      <AboutDetails />
    </div>
  );
};

export default About;
