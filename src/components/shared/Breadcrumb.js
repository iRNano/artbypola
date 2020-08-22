import React, { Fragment } from "react";

const Breadcrumb = ({ link }) => {
  return (
    <Fragment>
      <i className="home icon"></i>/{link}/
    </Fragment>
  );
};

export default Breadcrumb;
