import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "./shared/Breadcrumb";
import PortraitGallery from "./PortraitGallery";

const PortraitDescription = ({ photos }) => {
  let { _id } = useParams();
  const [selectedPortrait, setSelectedPortrait] = useState({});

  useEffect(() => {
    photos.forEach((element) => {
      if (element._id === parseInt(_id)) {
        setSelectedPortrait(element);
      }
    });
  }, []);

  console.log(selectedPortrait);
  return (
    <div className="portrait-description">
      <Breadcrumb link="shop" />
      <h1>SHOP</h1>
      <div className="ui grid">
        <div className="row">
          <div className="eight wide column">
            <PortraitGallery photo={selectedPortrait} />
          </div>
          <div className="eight wide column">form</div>
        </div>
      </div>
    </div>
  );
};

export default PortraitDescription;
