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
import "../../styles/css/Favorites.css";

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

  const [favorites, setFavorites] = useState([]);

  async function loadFavorites() {
    try {
      const { data } = await api.get(`/api/favorites`, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("authorization")}`
        }
      });

      if (data) {
        setFavorites(data.Products);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadFavorites();
  }, []);

  const hendleDelete = async id => {
    try {
      await api
        .delete(`/api/product/${id}/favorites`, {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("authorization")}`
          }
        })
        .then(() => {
          loadFavorites();
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="favorites_page">
      <div className="favorites_list">
        {!!favorites.length ? (
          <List className={classes.root}>
            <h2>Wish List</h2>
            {favorites &&
              favorites.map(product => (
                <>
                  <ListItem alignItems="flex-start" key={product.id}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={product.Images[0].url} />
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
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            <a
                              href="#"
                              onClick={() => hendleDelete(product.id)}
                            >
                              Remove
                            </a>
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </>
              ))}
          </List>
        ) : (
          <div className="wish_list_empty">
            <img src={emptyWishlist} alt="Empty ishlist " />
            <h2>Your wish list is empty</h2>
          </div>
        )}
      </div>
    </div>
  );
}
