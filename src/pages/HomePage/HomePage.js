import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components";
import "../../styles/css/HomePage.css";
import sale from "../../assets/21910.jpg";

export default function HomePage({ history }) {
  return (
    <div className="homePage">
      <img
        src={sale}
        alt="sale"
        style={{ width: "100%", height: "5%", borderRadius: "5px" }}
      />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> <Card />
      <Card />
    </div>
  );
}
