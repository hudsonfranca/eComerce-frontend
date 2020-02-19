import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import { Box, withStyles, Button } from "@material-ui/core";
import { Favorite, AddShoppingCart } from "@material-ui/icons";

import "../../styles/css/Card.css";

const StyledRating = withStyles({
  iconFilled: {
    color: "#ffbf00"
  },
  iconHover: {
    color: "gold"
  }
})(Rating);

export default function Card() {
  return (
    <div className="card" onClick={() => console.log("Clicked")}>
      <div className="favorite">
        <Box component="fieldset" mb={3} borderColor="transparent">
          <StyledRating
            name="customized-color"
            getLabelText={value => `${value} Heart${value !== 1 ? "s" : ""}`}
            icon={<Favorite fontSize="inherit" />}
            max={1}
          />
        </Box>
      </div>
      <img
        src="https://images-americanas.b2w.io/produtos/01/00/img2/134252/8/134252810_1GG.jpg"
        alt="product"
      />

      <div className="title">Smartphone Samsung Galaxy A20 32GB Azul.</div>

      <div className="price">
        <strong>$500.75</strong>
      </div>

      <div className="cartAdd">
        <Button variant="outlined" color="primary" size="medium">
          <AddShoppingCart /> Add to Cart
        </Button>
      </div>
    </div>
  );
}
