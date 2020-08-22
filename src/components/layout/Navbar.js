import React from "react";
import NavItem from "./NavItem";

const Navbar = ({ children }) => {
  return (
    <div
      className="navbar"
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children.map((child) => {
        const { name, link } = child.props;

        return <NavItem name={name} link={link} key={name} />;
      })}
    </div>
  );
};

export default Navbar;
