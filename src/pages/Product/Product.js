import React, { useEffect, useState } from "react";
import "../../styles/css/Product.css";
import Galery from "../../components/ImageZoom";
import { Button } from "@material-ui/core";
import { ShopTwoTone } from "@material-ui/icons";
import api from "../../services/api";

import "react-multi-carousel/lib/styles.css";

export default function Product({ history, match }) {
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

  async function handleBuy(id) {
    if (!sessionStorage.getItem("authorization")) {
      history.push("/signin");
    } else {
      const auth = await sessionStorage.getItem("authorization");
      const { data } = await api.post(`/api/product/${id}/cart`, null, {
        headers: {
          authorization: `Bearer ${auth}`
        }
      });

      if (data) {
        history.push("/cart");
      }
    }
  }

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

            <Button
              variant="contained"
              size="large"
              color="default"
              startIcon={<ShopTwoTone />}
              onClick={() => handleBuy(product.id)}
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
