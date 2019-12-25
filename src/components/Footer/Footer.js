import React from "react";
import "../../styles/css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>contact</li>
        <li>Account</li>
      </ul>
      <ul>
        <li>
          <i className="fab fa-facebook-square" />
        </li>
        <li>
          <i className="fab fa-twitter-square" />
        </li>
        <li>
          <i className="fab fa-instagram" />
        </li>
        <li>
          <i className="fab fa-youtube" />
        </li>
      </ul>
    </footer>
  );
}
