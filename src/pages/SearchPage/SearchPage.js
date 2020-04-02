import React, { useState, useEffect } from "react";
import { Card } from "../../components";
import api from "../../services/api";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Pagination from "material-ui-flat-pagination";
import "../../styles/css/SearchPage.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const theme = createMuiTheme();

export default function SearchPage({ name, handleCardClick }) {
  const classes = useStyles();

  const [offset, setOffset] = useState();
  const [products, setProducts] = useState([]);
  const [TotalProducts, setTotalProducts] = useState(0);

  function handleClick(offset) {
    setOffset(offset);
  }

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const { data } = await api.get(`/api/find/product`, {
          params: {
            name,
            offset,
            limit: 5
          }
        });

        document.title = `Search ${name}`;
        if (data) {
          setProducts(data.rows);
          setTotalProducts(data.count);
        }
      } catch (err) {
        console.log(err);
      }
    };
    loadProducts();
  }, [name, offset]);

  return (
    <div className="search_page">
      <div className="products_search_page">
        {!!products.length ? (
          products.map(prod => (
            <Card
              key={prod.id}
              image={prod.Images[0].image}
              title={prod.name}
              price={prod.price}
              id={prod.id}
              status={prod.status}
              handleClick={handleCardClick}
            />
          ))
        ) : (
          <div className="different_search">
            <h2>Hmmm, we didn't find anything for "{name}"</h2>
            <h3>Try a different search term .</h3>
          </div>
        )}
      </div>

      <div id="pagination_search_page" className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Pagination
            limit={5}
            offset={offset}
            total={TotalProducts}
            onClick={(e, offset) => handleClick(offset)}
            size="large"
            otherPageColor="primary"
          />
        </MuiThemeProvider>
      </div>
    </div>
  );
}
