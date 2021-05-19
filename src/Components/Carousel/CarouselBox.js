import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/800x400/?{cooking}"
            alt="cooking"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/800x400/?{vegetables}"
            alt="vegetables"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/800x400/?{fruits}"
            alt="fruits"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselBox;
