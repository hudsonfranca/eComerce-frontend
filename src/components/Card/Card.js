import React, { useState } from "react";
import { Rating } from "@material-ui/lab";
import api from "../../services/api";
import {
  Box,
  withStyles,
  Button,
  Popover,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Favorite, AddShoppingCart } from "@material-ui/icons";

import "../../styles/css/Card.css";

const StyledRating = withStyles({
  iconFilled: {
    color: "#ffbf00"
  },
  iconHover: {
    color: "gold"
  }
})(Rating);

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

export default function Card({ image, title, price, id, status, handleClick }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickAddToCart = async event => {
    if (!sessionStorage.getItem("authorization")) {
      return setAnchorEl(event.currentTarget);
    } else {
      const auth = await sessionStorage.getItem("authorization");
      const { data } = await api.post(`/api/product/${id}/cart`, null, {
        headers: {
          authorization: `Bearer ${auth}`
        }
      });
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFavorite = async () => {
    try {
      if (!sessionStorage.getItem("authorization")) {
      } else {
        const auth = await sessionStorage.getItem("authorization");
        await api.post(`/api/product/${id}/favorites`, null, {
          headers: {
            authorization: `Bearer ${auth}`
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const open = Boolean(anchorEl);
  const idPopover = open ? "simple-popover" : undefined;
  return (
    <>
      <div className="card_container">
        <div className="favorite">
          <Box
            component="fieldset"
            mb={3}
            borderColor="transparent"
            onClick={() => handleFavorite()}
          >
            <StyledRating
              // value={1}
              name="customized-color"
              getLabelText={value => `${value} Heart${value !== 1 ? "s" : ""}`}
              icon={<Favorite fontSize="inherit" />}
              max={1}
            />
          </Box>
        </div>
        <div className="card" onClick={() => handleClick(id)}>
          <img src={image} alt="product" />

          <div className="title">{title}</div>

          <div className="price">
            <strong>${price}</strong>
          </div>
        </div>
        <div className="cartAdd">
          {status ? (
            <>
              <Button
                variant="outlined"
                aria-describedby={idPopover}
                color="primary"
                size="medium"
                onClick={handleClickAddToCart}
              >
                <AddShoppingCart /> Add to Cart
              </Button>
              <Popover
                id={idPopover}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <Typography className={classes.typography}>
                  Sign in before click here.
                </Typography>
              </Popover>
            </>
          ) : (
            <Button variant="contained" color="secondary" disabled>
              Out of stock
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
