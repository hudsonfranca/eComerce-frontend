import React, { useEffect, useState, useContext } from "react";
import "../../styles/css/Product.css";
import { ImageZoom } from "../../components";
import Galery from "../../components/ImageZoom";
import { TextField, Button, Paper } from "@material-ui/core";
import { ShopTwoTone } from "@material-ui/icons";
import api from "../../services/api";
import { UserContext } from "../../routes/UserContext";

export default function Product({ match }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function loadProduct() {
      try {
        const { data } = await api.get(`/api/products/${match.params.id}`);
        document.title = `${data.name}`;
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    }
    loadProduct();
  }, []);

  return (
    <>
      <div className="productContainer ">
        <div className="imageView">
          <Galery images={product.Images} />
        </div>

        <div className="product_title">
          <h1>{product.name}</h1>

          <div className="product_description">
            <div>
              <p>{product.description}</p>
            </div>
          </div>
        </div>

        <div className="buy_info">
          <div className="info">
            <strong>${product.price}</strong>

            <TextField
              id="standard-number"
              label="Quantity"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
            />
            <Button
              variant="contained"
              size="large"
              color="primary"
              startIcon={<ShopTwoTone />}
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
