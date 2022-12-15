import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="newsletter">
        <h1>Stay with us!</h1>
        <p>Join over 1 000 000 people who receive our weekly newsletter.</p>
        <div>
          <input type="text"></input>
          <button></button>
        </div>
      </div>
      <div className="socials">
        <h1>Socials:</h1>
        <ul>
          <li>fb</li>
          <li>insta</li>
          <li>twitter</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
