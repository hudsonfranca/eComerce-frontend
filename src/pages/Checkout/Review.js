import React, { useState, useEffect } from "react";
import Decimal from "decimal.js";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  Avatar,
  makeStyles
} from "@material-ui/core";
import api from "../../services/api";
import "../../styles/css/Review.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 560,
    backgroundColor: "#3E3E3E"
  },
  inline: {
    display: "inline",
    color: "#fafbfc",
    marginTop: "20px"
  }
}));

export default function Review({ addressValues, paymentValues }) {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState([]);

  const {
    addressLine,
    city,
    zip,
    country,
    state,
    firstName,
    lastName
  } = addressValues;

  const { nameOnCard, cardNumber, expiryDate, cvv } = paymentValues;

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

  const validProducts = cartItems.filter(product => {
    return product.status === true;
  });

  const amount = validProducts.reduce((prevVal, elem) => {
    const priceByQuantity = new Decimal(elem.cart_products.quantity).mul(
      elem.price
    );

    return new Decimal(prevVal).plus(priceByQuantity);
  }, 0);

  return (
    <div className="review_checkout">
      <h2 className="review_title">Order summary</h2>
      <div className="review_products">
        <List className={classes.root}>
          {validProducts &&
            validProducts.map(product => (
              <>
                <ListItem alignItems="flex-start" key={product.id}>
                  <ListItemAvatar>
                    <Avatar alt="Travis Howard" src={product.Images[0].image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          ${product.price}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </>
            ))}
        </List>
      </div>
      <div className="review_details">
        <div className="review_shipping">
          <h2 className="review_title">Shipping</h2>
          <ul>
            <li>{`${firstName} ${lastName}`}</li>
            <li>{`${addressLine}`}</li>
            <li>{`${city}, ${state}, ${zip}, ${country}`}</li>
          </ul>
        </div>
        <div className="review_payment_details">
          <h2 className="review_title">Payment details</h2>
          <ul>
            <li>
              <div>Product Total</div> <div>${`${amount}`}</div>
            </li>
            <li>
              <div>Card type</div> <div>Visa</div>
            </li>
            <li>
              <div>Card holder </div>
              <div> {nameOnCard && `${nameOnCard}`}</div>
            </li>
            <li>
              <div>Card number</div>
              <div>{cardNumber && `${cardNumber}`}</div>
            </li>
            <li>
              <div>Expire date</div>
              <div>{expiryDate && `${expiryDate}`}</div>
            </li>
            <li>
              <div>CVV</div>
              <div>{cvv && `${cvv}`}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
