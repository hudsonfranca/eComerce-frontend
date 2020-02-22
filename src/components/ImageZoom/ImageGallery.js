import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ImagesGallery({ images }) {
  return (
    <Carousel infiniteLoop useKeyboardArrows width={"80%"}>
      {images &&
        images.map(image => (
          <div key={image.id}>
            <img src={image.url} alt="product image" />
          </div>
        ))}
    </Carousel>
  );
}
