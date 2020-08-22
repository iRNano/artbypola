import React, { Fragment } from "react";

const Portrait = ({ photo }) => {
  let { url, name, price } = photo;
  return (
    <Fragment>
      <div className="portrait" style={{ padding: "1em" }}>
        <img src={url} style={{ maxWidth: "260px", maxHeight: "300px" }}></img>
      </div>
      <div>
        <p style={{ margin: 0 }}>{name}</p>
        <h4 style={{ margin: 0 }}>{price} Php</h4>
      </div>
    </Fragment>
  );
};

export default Portrait;
