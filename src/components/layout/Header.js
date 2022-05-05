import React from "react";
import {useNavigate} from 'react-router-dom'
import Navbar from "./Navbar";
import HeaderImage from "./HeaderImage";
import HeaderCart from "./HeaderCart";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="ui container header">
      <HeaderCart onClick={()=>navigate('/cart')}/>
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
