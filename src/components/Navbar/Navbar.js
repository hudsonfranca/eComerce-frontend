import React from "react";
import PropTypes from "prop-types";
import HamburguerButton from "../HamburguerButton/HamburguerButton";
import ToobarButton from "../ToobarButton/ToobarButton";
import SideDrawer from "../SideDrawer/SideDrawer";
import SearchInputToobar from "../SearchInputToobar/SearchInputToobar";
import "../style/css/Navbar.css";

function Navbar({ HbClick }) {
  return (
    <>
      <header className="App-header">
        <nav className="toobar">
          <div className="hamburguer-button">
            <HamburguerButton click={HbClick} type="" />
          </div>
          <div className="logo">
            <h1>LOGO</h1>
          </div>
          <div className="search">
            <SearchInputToobar />
          </div>
          <div className="account">
            <ToobarButton icon="fas fa-user-alt" id="account" />
            <label htmlFor="account" className="label">
              Sign in
            </label>
          </div>
          <div className="favorites">
            <ToobarButton id="favorites" icon="fas fa-heart" />
            <label htmlFor="favorites" className="label">
              Favorites
            </label>
          </div>
          <div className="cart">
            <ToobarButton id="cart" icon="fas fa-shopping-cart" />
            <label htmlFor="cart" className="label">
              Cart
            </label>
          </div>
        </nav>
      </header>
      <SideDrawer />
    </>
  );
}

Navbar.propTypes = {
  HbClick: PropTypes.func.isRequired
};

export default Navbar;
