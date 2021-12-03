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
            LLEVANDOTE A LA PRÁCTICA
          </h1>
          <h3 className="text-dark text-subtitle">
            Aprende a llevar a la práctica todos tus conocimientos!
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-image slide-2"></div>

        <Carousel.Caption className="slide-text">
          <h1 className="text-dark fw-bold text-header">
            APRENDE SOBRE REHABILITACIÓN
          </h1>
          <h3 className="text-dark text-subtitle">
            Aprende como abordar a distintos tipos de pacientes para diferentes
            patologías
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-image slide-3"></div>

        <Carousel.Caption className="slide-text">
          <h1 className="text-dark fw-bold text-header">
            ESTUDIA DESDE CUALQUIER PARTE DEL MUNDO
          </h1>
          <h3 className="text-dark text-subtitle">
            No importa donde estés, seguí capacitandote con nuestros cursos y
            aprende a dar tus primeros pasos en la profesión
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
