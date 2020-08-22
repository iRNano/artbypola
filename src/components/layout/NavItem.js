import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BaseNavItem = styled(NavLink)`
  color: black;
  font-weight: regular;
  &:hover {
    color: black;
  }
`;

const StyledNavItem = styled(({ className, ...props }) => (
  <BaseNavItem {...props} activeClassName={className} />
))``;

const NavItem = ({ name, link }) => {
  let className = "item";
  return (
    <div className={className}>
      <BaseNavItem to={link} activeStyle={{ fontWeight: "900" }}>
        <p style={{ padding: "1em" }}>{name}</p>
      </BaseNavItem>
    </div>
  );
};

export default NavItem;
