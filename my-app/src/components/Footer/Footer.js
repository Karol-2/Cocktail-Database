import React from "react";
import { useState, useRef, useLayoutEffect } from "react";
import "./Footer.scss";

const Footer = () => {
  const [showMessage, SetShowMessage] = useState(false);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 15}px`;
  }, [showMessage]);

  return (
    <div className="footer">
      <div className="newsletter">
        <h1>Stay with us!</h1>

        <div className="e-mail">
          <button ref={button} onClick={() => SetShowMessage((prev) => !prev)}>
            Click to get an admin page access
          </button>

          {showMessage && (
            <div ref={popup}>
              <p>username: admin</p>
              <p>password:admin</p>{" "}
            </div>
          )}
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
