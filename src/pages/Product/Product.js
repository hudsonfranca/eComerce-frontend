import React, { useEffect, useState, useContext } from "react";
import "../../styles/css/Product.css";
import Galery from "../../components/ImageZoom";
import { Button } from "@material-ui/core";
import { ShopTwoTone } from "@material-ui/icons";
import api from "../../services/api";
import { Carousel } from "react-responsive-carousel";
import { Card } from "../../components";
import CarouselItem from "react-multi-carousel";
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
              color="primary"
              startIcon={<ShopTwoTone />}
              onClick={() => handleBuy(product.id)}
            >
              Buy
            </Button>
          </div>
        </div>

        <CarouselItem
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="card_carousel"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 4,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <Card
            image={
              "https://images-americanas.b2w.io/produtos/01/00/img2/134253/7/134253791_1GG.jpg"
            }
            title={"prod"}
            price={"900"}
            id={1}
            status={true}
          />

          <Card
            image={
              "https://images-americanas.b2w.io/produtos/01/00/img2/134253/7/134253791_1GG.jpg"
            }
            title={"prod"}
            price={"900"}
            id={1}
            status={true}
          />

          <Card
            image={
              "https://images-americanas.b2w.io/produtos/01/00/img2/134253/7/134253791_1GG.jpg"
            }
            title={"prod"}
            price={"900"}
            id={1}
            status={true}
          />

          <Card
            image={
              "https://images-americanas.b2w.io/produtos/01/00/img2/134253/7/134253791_1GG.jpg"
            }
            title={"prod"}
            price={"900"}
            id={1}
            status={true}
          />

          <Card
            image={
              "https://images-americanas.b2w.io/produtos/01/00/img2/134253/7/134253791_1GG.jpg"
            }
            title={"prod"}
            price={"900"}
            id={1}
            status={true}
          />

          <Card
            image={
              "https://images-americanas.b2w.io/produtos/01/00/img2/134253/7/134253791_1GG.jpg"
            }
            title={"prod"}
            price={"900"}
            id={1}
            status={true}
          />

          <Card
            image={
              "https://images-americanas.b2w.io/produtos/01/00/img2/134253/7/134253791_1GG.jpg"
            }
            title={"prod"}
            price={"900"}
            id={1}
            status={true}
          />

          <Card
            image={
              "https://images-americanas.b2w.io/produtos/01/00/img2/134253/7/134253791_1GG.jpg"
            }
            title={"prod"}
            price={"900"}
            id={1}
            status={true}
          />

          <Card
            image={
              "https://images-americanas.b2w.io/produtos/01/00/img2/134253/7/134253791_1GG.jpg"
            }
            title={"prod"}
            price={"900"}
            id={1}
            status={true}
          />

          <Card
            image={
              "https://images-americanas.b2w.io/produtos/01/00/img2/134253/7/134253791_1GG.jpg"
            }
            title={"prod"}
            price={"900"}
            id={1}
            status={true}
          />
        </CarouselItem>
      </div>
    </>
  );
}
