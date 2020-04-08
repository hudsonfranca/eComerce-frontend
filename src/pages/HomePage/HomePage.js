import React, { useState, useEffect } from "react";
import { Card } from "../../components";
import "../../styles/css/HomePage.css";
import baner1 from "../../assets/baner1.webp";
import baner2 from "../../assets/baner2.webp";
import baner3 from "../../assets/baner3.webp";
import baner4 from "../../assets/baner4.webp";
import baner5 from "../../assets/baner5.webp";
import {
  createMuiTheme,
  MuiThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import CssBaseline from "@material-ui/core/CssBaseline";
import api from "../../services/api";
import { Carousel } from "react-responsive-carousel";

const theme = createMuiTheme();
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function HomePage({ history }) {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);

  const [TotalProducts, setTotalProducts] = useState(0);

  function handleClickPagination(offset) {
    setOffset(offset);
  }

  async function loadproducts() {
    const { data } = await api.get(`/api/products`, {
      params: {
        offset,
        limit: 10,
      },
    });
    if (data) {
      setProducts(data.rows);
      setTotalProducts(data.count);
    }
  }

  useEffect(() => {
    loadproducts();
  }, [offset]);

  function handleCardClick(id) {
    history.push(`/product/${id}`);
  }

  return (
    <div className="homePage">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop={true}
        showStatus={false}
      >
        <div>
          <img src={baner1} alt="Baner 1" />
        </div>
        <div>
          <img src={baner2} alt="Baner 2" />
        </div>
        <div>
          <img src={baner3} alt="Baner 3" />
        </div>
        <div>
          <img src={baner4} alt="Baner 4" />
        </div>
        <div>
          <img src={baner5} alt="Baner 5" />
        </div>
      </Carousel>
      {products &&
        products.map((prod) => (
          <Card
            key={prod.id}
            image={prod.Images[0]?.image}
            title={prod.name}
            price={prod.price}
            id={prod.id}
            status={prod.status}
            handleClick={handleCardClick}
          />
        ))}
      <div id="pagination_home_page" className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Pagination
            limit={10}
            offset={offset}
            total={TotalProducts}
            onClick={(e, offset) => handleClickPagination(offset)}
            size="large"
            otherPageColor="primary"
          />
        </MuiThemeProvider>
      </div>
    </div>
  );
}
