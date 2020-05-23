import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ImagesGallery({ images }) {
  return (
    <Carousel infiniteLoop useKeyboardArrows dynamicHeight width={"70%"}>
      {images &&
        images.map((image) => (
          <div key={image.id}>
            <img src={image.image} alt="product" />
          </div>
        ))}
    </Carousel>
  );
}
