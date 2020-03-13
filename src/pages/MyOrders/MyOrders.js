import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  makeStyles,
  Avatar
} from "@material-ui/core";
import api from "../../services/api";
import emptyWishlist from "../../assets/empty_wishlist.png";
import "../../styles/css/MyOrders.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    backgroundColor: "#3E3E3E"
  },
  inline: {
    display: "inline",
    color: "#fafbfc",
    marginTop: "20px"
  }
}));

export default function Favorites({ history }) {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  async function loadOrders() {
    try {
      if (!sessionStorage.getItem("authorization")) {
        history.push("/signin");
      } else {
        const { data } = await api.get(`/api/orders/index`, {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("authorization")}`
          }
        });
        if (data) {
          setOrders(data.rows);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    loadOrders();
  }, []);
  return (
    <div className="myOrders_page">
      <div className="myOrders_list">
        {!!orders.length ? (
          <>
            {orders.map(order => (
              <List className={classes.root}>
                <div className="order_status">
                  <h5>Order #{order.id}</h5>
                  <h6>{order.status}</h6>
                </div>
                {order.Products.map(product => (
                  <ListItem alignItems="flex-start" key={product.id}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={product.Images[0].small} />
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
                ))}
              </List>
            ))}
          </>
        ) : (
          <div className="myOrders_list_empty">
            <img src={emptyWishlist} alt="Empty my orders list " />
            <h2>Your wish list is empty</h2>
          </div>
        )}
      </div>
    </div>
  );
}
