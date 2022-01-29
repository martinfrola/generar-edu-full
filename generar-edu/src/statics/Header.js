import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../backgrounds.css";
export default function Header() {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item>
        <div className="bg-image slide-1"></div>
        <Carousel.Caption className="slide-text">
          <h1 className="text-dark fw-bold text-header">
            Tu mejor inversion es en conocimiento
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-image slide-2"></div>

        <Carousel.Caption className="slide-text">
          <h1 className="text-dark fw-bold text-header">
            Aprende a llevar tus conocimientos a la práctica
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-image slide-3"></div>

        <Carousel.Caption className="slide-text">
          <h1 className="text-dark fw-bold text-header">
            Docencia en constante aprendizaje
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
