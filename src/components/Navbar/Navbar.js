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
          <div className="logo">MY LOGO</div>
          <div className="search">
            <SearchInputToobar />
          </div>
          <div className="account">
            <ToobarButton icon="fas fa-user-alt" id="account" />
            <label htmlFor="account" className="label">
              Minha Conta
            </label>
          </div>
          <div className="favorites">
            <ToobarButton id="favorites" icon="fas fa-heart" />
            <label htmlFor="favorites" className="label">
              Lista de desejos
            </label>
          </div>
          <div className="cart">
            <ToobarButton id="cart" icon="fas fa-shopping-cart" />
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
