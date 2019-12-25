import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { mobileAccount, mobileCategories } from "../../actions/SideDrawer";
import logo from "../../assets/logo.png";

import "../../styles/css/Navbar.css";

export function Navbar({ mobileCategories, mobileAccount }) {
  return (
    <>
      <header className="App-header">
        <nav className="toobar">
          <div className="hamburguer-button">
            <button
              type="button"
              className="hamburguerButton"
              onClick={mobileCategories}
            >
              <div className="rbline" />
              <div className="rbline" />
              <div className="rbline" />
            </button>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" className="logo-image" />
            </Link>
          </div>
          <div className="search">
            <input type="text" className="searchInput" />
            <button type="button" className="searchInputButom">
              <i className="fas fa-search fa-2x" />
            </button>
          </div>
          <div className="account-mobile">
            <button
              type="button"
              className="toobar__button"
              id="account"
              onClick={mobileAccount}
            >
              <i className="fas fa-user-alt fa-2x " />
            </button>
            <label htmlFor="account" className="label">
              Sign in
            </label>
          </div>
          <div className="account-desktop">
            <Link to="/signin">
              <button type="button" className="toobar__button" id="account">
                <i className="fas fa-user-alt fa-2x " />
              </button>

              <label htmlFor="account-desktop" className="label">
                Sign in
              </label>
            </Link>
          </div>
          <div className="favorites">
            <Link to="favorites">
              <button type="button" className="toobar__button" id="favorites">
                <i className="fas fa-heart fa-2x " />
              </button>

              <label htmlFor="favorites" className="label">
                Favorites
              </label>
            </Link>
          </div>
          <div className="cart">
            <Link to="cart">
              <button type="button" className="toobar__button" id="cart">
                <i className="fas fa-shopping-cart fa-2x " />
              </button>

              <label htmlFor="cart" className="label">
                Cart
              </label>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  mobileAccount: () => dispatch(mobileAccount()),
  mobileCategories: () => dispatch(mobileCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
