import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="ui container header">
      <Navbar>
        <div name="HOME"></div>
        <div name="PORTRAITS"></div>
        <div name="SHOP"></div>
        <div name="CUSTOM-MADE"></div>
        <div name="CONTACT"></div>
      </Navbar>
    </div>
  );
};

export default Header;
