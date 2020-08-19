import React from "react";
import NavItem from "./NavItem";

const Navbar = ({ children }) => {
  return (
    <div className="ui secondary menu navbar centered">
      {children.map((child) => {
        const { name } = child.props;

        return <NavItem name={name} />;
      })}
    </div>
  );
};

export default Navbar;
