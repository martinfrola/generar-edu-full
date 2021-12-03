import React from "react";

function CardComentario(props) {
  const { fecha, imgUser, msg, nombreVideo, userName } = props;
  return (
    <div className="card-comentario bg-secondary px-4 rounded mb-4 ">
      <div className="content-comentario d-flex align-items-start pt-3">
        <img src={imgUser} alt={userName} className="me-4" />
        <div>
          <h3 className="text-text fw-bold">{userName}</h3>
          <p className="text-details">{msg}</p>
          <div className="d-flex text-details ">
            <p className="me-5">{fecha}</p>
            <p className="me-5 ">Sobre: {nombreVideo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComentario;
