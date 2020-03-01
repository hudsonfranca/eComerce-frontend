import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  IconButton,
  withStyles,
  Badge
} from "@material-ui/core";
import Decimal from "decimal.js";
import api from "../../services/api";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import cartEmpty from "../../assets/cartEmpty.jpg";

import "../../styles/css/Cart.css";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

export default function Cart({ history }) {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const handleChange = event => {
    setAge(event.target.value);
  };

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function loadCart() {
      if (!sessionStorage.getItem("authorization")) {
        return;
      } else {
        const { data } = await api.get(`/api/cart`, {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("authorization")}`
          }
        });
        if (data) {
          setCartItems(data);
        }
      }
    }

    loadCart();
  }, []);

  function handleClickCheckout(e) {
    if (!sessionStorage.getItem("authorization")) {
      history.push("/signin");
    } else {
      history.push(`/sheckout`);
    }
  }

  const validProducts = cartItems.filter(product => {
    return product.status === true;
  });

  const amount = validProducts.reduce((prevVal, elem) => {
    return new Decimal(prevVal).plus(elem.price);
  }, 0);

  async function removeCart(id) {
    await api
      .delete(`/api/product/${id}/cart`, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("authorization")}`
        }
      })
      .then(async () => {
        const { data } = await api.get(`/api/cart`, {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("authorization")}`
          }
        });

        if (data) {
          setCartItems(data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="cart-page">
      <div className="checkout">
        <h1>Your Cart</h1>
        <div className="product_total">
          <h2>Product Total</h2> <h3>${`${amount}`}</h3>
        </div>

        <div className="cart_page_icon">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartItems.length} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div>
        <Button
          style={{ padding: "15px" }}
          size="large"
          variant="contained"
          color="primary"
          onClick={handleClickCheckout}
        >
          Checkout
        </Button>
      </div>
      {!!cartItems.length ? (
        cartItems.map(items => (
          <div className="items" key={items.id}>
            <div className="name">
              <img src={items.Images[0].url} alt="product image" />
              <p>{items.name}</p>
            </div>

            <div className="quantity">
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">
                  Quantity
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="price">{items.price}</div>
            <a href="#" onClick={() => removeCart(items.id)}>
              Remove
            </a>
          </div>
        ))
      ) : (
        <div className="cart_empty">
          <img src={cartEmpty} alt="cart empty image" />
          <h1>Your Shopping Cart is empty</h1>
        </div>
      )}
    </div>
  );
}
