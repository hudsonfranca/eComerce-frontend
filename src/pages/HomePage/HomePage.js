import React, { useState, useEffect } from "react";
import { Card } from "../../components";
import "../../styles/css/HomePage.css";
import baner1 from "../../assets/baner1.webp";
import baner2 from "../../assets/baner2.webp";
import baner3 from "../../assets/baner3.webp";
import baner4 from "../../assets/baner4.webp";
import baner5 from "../../assets/baner5.webp";
import api from "../../services/api";
import { Carousel } from "react-responsive-carousel";

export default function HomePage({ history }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get("/api/products");
      document.title = "Home";
      setProducts(data.rows);
    }
    loadProducts();
  }, []);

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
        ))}
    </div>
  );
}
