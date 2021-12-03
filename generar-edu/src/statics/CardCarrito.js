import React from "react";
import Foto from "../img/curso-1.jpg";
import Tacho from "../img/tacho.png";
import { useCarrito } from "../context/CarritoProvider";
import { initialCarrito, actionTypes } from "../context/CarritoRedicer";
function CardCarrito(props) {
  const [{ productos }, dispatch] = useCarrito(initialCarrito);
  function handleClick() {
    dispatch({
      type: actionTypes.QUITAR_DEL_CARRITO,
      id: props.id,
    });
  }

  return (
    <div className="card-carrito border border-dark align-items-center">
      <div className="d-flex align-items-center">
        <img
          src={Foto}
          className="img-curso-carrito me-3"
          alt="Imagen del curso"
        />
        <div>
          <h4 className="text-subtitle text-dark">{props.nombre}</h4>
          <h4 className="text-subtitle fw-bold text-dark">${props.precio}</h4>
        </div>
      </div>

      <img
        src={Tacho}
        className="tacho-btn pe-3"
        onClick={handleClick}
        alt="Elimina la imagen"
      />
    </div>
  );
}

export default CardCarrito;
