import React from "react";
import Portrait from "./Portrait";
import { Link } from "react-router-dom";

const PortraitList = ({ photos }) => {
  console.log(photos)
  const portraitClickHandler = (id) => {
    alert("test");
    console.log("test");
    console.log(id);
  };

  return (
    <div className="portrait-list ui four column grid">
      {photos.map((photo) => (
        <div className="column" key={photo._id}>
          <Link to={`/shop/${photo._id}`}>
            <Portrait photo={photo} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PortraitList;
