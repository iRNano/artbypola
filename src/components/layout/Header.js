import React from "react";
import Navbar from "./Navbar";
import HeaderImage from "./HeaderImage";
import HeaderCart from "./HeaderCart";
const Header = () => {
  return (
    <div className="ui container header">
      <HeaderCart />
      <HeaderImage />
      <Navbar>
        <div name="HOME" link="/"></div>
        <div name="SHOP" link="/shop"></div>
        <div name="ABOUT" link="/about"></div>
        <div name="CONTACT" link="/contact"></div>
      </Navbar>
    </div>
  );
};

export default Header;
