import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { mobileAccount, mobileCategories } from "../../actions/SideDrawer";
import logo from "../../assets/logo.png";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import ShoppingBasketSharpIcon from "@material-ui/icons/ShoppingBasketSharp";

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
          <div className="account-desktop">
            <Link to="/signin">
              <button type="button" className="toobar__button" id="account">
                <AccountCircleSharpIcon fontSize="large" />
              </button>
              <label htmlFor="account-desktop" className="label">
                Sign in
              </label>
            </Link>
          </div>
          <div className="favorites">
            <Link to="/favorites">
              <button type="button" className="toobar__button" id="favorites">
                <FavoriteSharpIcon fontSize="large" />
              </button>

              <label htmlFor="favorites" className="label">
                Wish list
              </label>
            </Link>
          </div>
          <div className="Orders-icon">
            <Link to="/orders">
              <button type="button" className="toobar__button" id="orders-icon">
                <ShoppingBasketSharpIcon fontSize="large" />
              </button>

              <label htmlFor="orders-icon" className="label">
                My orders
              </label>
            </Link>
          </div>
          <div className="cart">
            <Link to="/cart">
              <button type="button" className="toobar__button" id="cart">
                <ShoppingCartSharpIcon fontSize="large" />
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
