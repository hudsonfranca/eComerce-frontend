import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components";
import "../../styles/css/HomePage.css";
import sale from "../../assets/21910.jpg";
import api from "../../services/api";
import { UserContext } from "../../routes/UserContext";

export default function HomePage({ history }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get("/api/products");
      document.title = "Home";
      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleCardClick(id) {
    history.push(`/product/${id}`);
  }

  const { user, setUser } = useContext(UserContext);

  return (
    <div className="homePage">
      <img
        src={sale}
        alt="sale"
        style={{ width: "100%", height: "5%", borderRadius: "5px" }}
      />
      {products &&
        products.map(prod => (
          <Card
            key={prod.id}
            image={prod.Images[0].url}
            title={prod.name}
            price={prod.price}
            id={prod.id}
            status={prod.status}
            handleClick={handleCardClick}
            userAuthenticated={user}
          />
        ))}
    </div>
  );
}
