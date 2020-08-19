import React from "react";

const Footer = () => {
  return (
    <div className="ui grid footer">
      <div className="six wide column">
        <h3>About POLA</h3>
        <p>
          Aliquip ex sit consequat ullamco commodo duis cillum ipsum do laboris
          nisi tempor cillum. Dolor minim aliquip adipisicing do elit officia.
          Laboris ipsum nostrud ipsum adipisicing eu non duis duis esse fugiat.
          Amet ut ex elit enim exercitation sint qui velit velit laborum. Sunt
        </p>
      </div>
      <div className="three wide column">
        <h5>Follow Us</h5>
        <div className="social-media-icons">
          <i class="instagram icon"></i>
          <i class="youtube icon"></i>
          <i class="facebook f icon"></i>
        </div>
      </div>
      <div className="four wide column">
        <h5>Subscribe</h5>
        <p>Sign up for the latest news, offers and styles</p>
        <input className="ui input" placeholder="Your email address"></input>
        <button className="ui button">Subscribe</button>
      </div>
      <div className="three wide column">
        <h5>Contact</h5>
        <p>store@artbypola.com</p>
        <p>8123-12-12</p>
      </div>
    </div>
  );
};

export default Footer;
