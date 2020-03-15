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
import cartEmpty from "../../assets/cartEmpty.png";

import "../../styles/css/Cart.css";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  label: {
    color: "#fafbfc"
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
  useEffect(() => {
    document.title = "Cart";
  }, []);

  const classes = useStyles();

  const [cartItems, setCartItems] = useState([]);

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

  useEffect(() => {
    loadCart();
  }, []);

  const handleChange = async (id, quantity) => {
    try {
      const { data } = await api.put(
        `/api/product/${id}/cart`,
        {
          quantity
        },
        {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("authorization")}`
          }
        }
      );

      if (data) {
        loadCart();
      }
    } catch (err) {
      console.log(err);
    }
  };

  function handleClickCheckout(e) {
    if (!sessionStorage.getItem("authorization")) {
      history.push("/signin");
    } else if (sessionStorage.getItem("authorization") && !!cartItems.length) {
      history.push(`/sheckout`);
    } else {
    }
  }

  const validProducts = cartItems.filter(product => {
    return product.status === true;
  });

  const amount = validProducts.reduce((prevVal, elem) => {
    const priceByQuantity = new Decimal(elem.cart_products.quantity).mul(
      elem.price
    );

    return new Decimal(prevVal).plus(priceByQuantity);
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
      <div className="checkout_cartPage">
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
          onClick={handleClickCheckout}
        >
          Checkout
        </Button>
      </div>
      {!!cartItems.length ? (
        cartItems.map(items => (
          <div className="items" key={items.id}>
            <div className="name">
              <img
                className="cart_img"
                src={items.Images[0].image}
                alt="product "
              />
              <p>{items.name}</p>
            </div>

            <div className="quantity">
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel
                  className={classes.label}
                  id="demo-simple-select-filled-label"
                >
                  Quantity
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={items.cart_products.quantity}
                  onChange={e => handleChange(items.id, e.target.value)}
                  className={classes.label}
                >
                  <MenuItem value={1}> 1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="price">${items.price}</div>

            <Button
              style={{ padding: "15px" }}
              size="large"
              variant="contained"
              onClick={() => removeCart(items.id)}
            >
              Remove
            </Button>
          </div>
        ))
      ) : (
        <div className="cart_empty">
          <img src={cartEmpty} alt="cart empty " />
          <h1>Your Shopping Cart is empty</h1>
        </div>
      )}
    </div>
  );
}
