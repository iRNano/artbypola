import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "./shared/Breadcrumb";
import PortraitGallery from "./PortraitGallery";
import PortraitForm from './PortraitForm';
import PortraitOtherCollections from "./shared/PortraitOtherCollections";
import PortraitList from "./PortraitList";

const PortraitDescription = ({ photos }) => {
  let { _id } = useParams();
  const [selectedPortrait, setSelectedPortrait] = useState(null);
  const [sameCollection,setSameCollection] = useState([])
  let otherPortraits = null

  useEffect(() => {
    photos.map((portrait) => {

      if (portrait._id === parseInt(_id)) {
        setSelectedPortrait(portrait);
      }
    });

    otherPortraits = photos.filter(portrait => 
        portrait._id !== Number(_id)
      )

    setSameCollection(otherPortraits);
  }, []);
  
  return (
    <div className="portrait-description">
      <Breadcrumb link="shop" />
      <h1>SHOP</h1>
      <div className="ui grid">
      {selectedPortrait && sameCollection? 
      <Fragment>
        <div className="row">
          <div className="eight wide column">
            <PortraitGallery photo={selectedPortrait} /> 
          </div>
          <div className="eight wide column">
            <PortraitForm photo={selectedPortrait}/>
          </div>
        </div>
        <div className="row">
          
            <h1>More from this collection</h1>
        </div>
        <div className="row">
          <PortraitList photos={sameCollection} />
        </div>
          
      </Fragment>
      : 'loading' }
      </div>
    </div>
  );
};

export default PortraitDescription;
