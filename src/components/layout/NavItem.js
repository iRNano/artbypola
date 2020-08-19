import React from "react";

const NavItem = ({ name }) => {
  let className = "item";
  return (
    <div className={className}>
      <h1>{name}</h1>
    </div>
  );
};

export default NavItem;
