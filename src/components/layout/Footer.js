import React from "react";
import pola from "../../assets/images/pola_logo.png";

const Footer = () => {
  return (
    <div
      className="ui grid footer"
      style={{ paddingBottom: "1em", paddingTop: "1em" }}
    >
      <div className="row">
        <div className="six wide column">
          <div className="inline" style={{ display: "flex" }}>
            <img src={pola} style={{ maxWidth: "70px", padding: "1em" }}></img>
            <h4 style={{ padding: "1em" }}>About POLA</h4>
          </div>

          <p>
            Aliquip ex sit consequat ullamco commodo duis cillum ipsum do
            laboris nisi tempor cillum. Dolor minim aliquip adipisicing do elit
            officia. Laboris ipsum nostrud ipsum adipisicing eu non duis duis
            esse fugiat. Amet ut ex elit enim exercitation sint qui velit velit
            laborum. Sunt
          </p>
        </div>
        <div className="three wide column" style={{ paddingTop: "3em" }}>
          <h5>Follow Us</h5>
          <div className="social-media-icons">
            <i className="instagram icon" style={{ paddingRight: "2em" }}></i>
            <i className="youtube icon" style={{ paddingRight: "2em" }}></i>
            <i className="facebook f icon" style={{ paddingRight: "2em" }}></i>
          </div>
        </div>
        <div
          className="four wide column"
          style={{ paddingTop: "3em", paddingRight: "4em" }}
        >
          <h5>Subscribe</h5>
          <p>Sign up for the latest news, offers and styles</p>
          <input
            className="ui input"
            placeholder="Your email address"
            style={{
              padding: "1em",
              marginTop: "1em",
              marginBottom: "1em",
              width: "100%",
            }}
          ></input>
          <button className="ui secondary button">Subscribe</button>
        </div>
        <div className="three wide column" style={{ paddingTop: "3em" }}>
          <h5>Contact</h5>
          <p>store@artbypola.com</p>
          <p>8123-12-12</p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h5
            className="ui header centered"
            style={{ paddingTop: "4em", paddingBottom: "2em" }}
          >
            DESIGN BY PIAO - 2020. ALL RIGHTS RESERVED.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
