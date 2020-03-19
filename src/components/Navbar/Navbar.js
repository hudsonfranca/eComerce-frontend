import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { mobileAccount, mobileCategories } from "../../actions/SideDrawer";
import logo from "../../assets/logo.png";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import ShoppingBasketSharpIcon from "@material-ui/icons/ShoppingBasketSharp";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, Paper, InputBase, IconButton } from "@material-ui/core";
import "../../styles/css/Navbar.css";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

export function Navbar({ mobileCategories, mobileAccount }) {
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/search/${searchValue}`);
  };

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
            <Paper component="form" className={classes.root}>
              <form onSubmit={handleSubmit} className={classes.root}>
                <InputBase
                  className={classes.input}
                  placeholder="Search "
                  inputProps={{ "aria-label": "search" }}
                  onChange={e => setSearchValue(e.target.value)}
                  value={searchValue}
                />
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </form>
            </Paper>
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
