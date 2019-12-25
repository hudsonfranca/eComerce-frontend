import React from "react";
import "../../styles/css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Account</li>
      </ul>
      <ul className="footer-list">
        <li>
          <i className="fab fa-facebook-square fa-3x" />
        </li>
        <li>
          <i className="fab fa-twitter-square fa-3x" />
        </li>
        <li>
          <i className="fab fa-instagram fa-3x" />
        </li>
        <li>
          <i className="fab fa-youtube fa-3x" />
        </li>
      </ul>
    </footer>
  );
}
