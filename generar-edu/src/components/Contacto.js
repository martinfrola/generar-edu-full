import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { app } from "../firebase";

import { getFirestore, collection, addDoc } from "firebase/firestore";

import Swal from "sweetalert2";

function Contacto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const db = getFirestore();

  //HOOK PARA RECOLECTAR LOS CAMPOS PARA CONTACTO
  const [data, setData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  //GUARDAMOS LOS DATOS A MEDIDA QUE VAN ESCRIBIENDO EN LOS CAMPOS
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  //AL ENVIAR GUARDAMOS LOS DATOS EN LA BASE DE DATOS
  function handleSubmit(e) {
    e.preventDefault();
    if (data.nombre !== "" && data.email !== "" && data.mensaje !== "") {
      try {
        const docRef = addDoc(collection(db, "MENSAJES DE CONTACTO"), data);

        // mensaje de confiración
        Swal.fire({
          icon: "success",
          iconColor: "green",
          title: "Tu mensaje se envió correctamente.",
          text: " ¡Te responderemos lo mas rápido posible!",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
        });
      } catch (e) {
        //En caso de un error, aparecera esta mensaje
        Swal.fire({
          icon: "error",
          iconColor: "red",
          title: "Ups, hubo un problema con nuestra base de datos!",
          text: "Vuelve a intentar en unos minutos.",
          confirmButtonText: "Entendido",
          confirmButtonColor: "#a2416b",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        iconColor: "#852747",
        title: "Ups, parece que faltó completar algún campo!",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#a2416b",
      });
    }
  }

  return (
    <div className="contacto bg-light pb-5">
      <h1 className="text-center pt-5 pb-5 text-title fw-bold text-dark">
        Envianos un mensaje
      </h1>
      <div className="contacto-content bg-dark py-2">
        <Form className="filds container" onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-light">Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tu Nombre"
              onChange={handleChange}
              name="nombre"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-light">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="ejemplo@ejemplo.com"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-light">Escribe tu mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleChange}
              name="mensaje"
            />
          </Form.Group>
          <div className="container d-flex justify-content-end">
            <button type="submit" className="btn btn-secondary px-5">
              Enviar
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Contacto;
