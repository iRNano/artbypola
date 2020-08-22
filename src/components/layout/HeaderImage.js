import React from "react";
import logo from "../../assets/images/pola_logo.png";

const HeaderImage = () => {
  return (
    <div className="header-image" style={{ textAlign: "center" }}>
      <img src={logo}></img>
    </div>
  );
};

export default HeaderImage;
