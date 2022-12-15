import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="newsletter">
        <h1>Stay with us!</h1>
        <p>Join over 1 000 000 people who receive our weekly newsletter.</p>
        <div className="e-mail">
          <input type="text" placeholder="example@page.com"></input>
          <button>Register</button>
        </div>
      </div>
      <div className="socials">
        <h1>Socials:</h1>
        <p>Follow us on our social medias!</p>
        <ul>
          <li>Facebook: @CocktailBarOfficial</li>
          <li>Instagram: @CocktailBar</li>
          <li>Twitter: @CocktailBar</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
