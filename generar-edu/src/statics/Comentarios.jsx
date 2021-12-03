import React, { useEffect, useState } from "react";
import CardComentario from "../statics/CardComentario";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { app } from "../firebase";
import "firebase/compat/database";

function Comentarios(props) {
  //Obtengo la fecha actual para enviar al estado junto con los datos del usuario
  const date = new Date();
  const año = date.getFullYear();
  const mes = date.getMonth() + 1; //porque arranca de 0
  const dia = date.getDate();
  const actualDate = `${dia}/${mes}/${año}`;

  // const dataVideos = props.modulo.modulo_1s;

  //Hook para guardar la data del formulario
  const [dataMsg, setDataMsg] = useState({
    userName: "",
    nombreVideo: "",
    msg: "",
    fecha: "",
    imgUser: "",
  });

  useEffect(() => {
    setDataMsg({
      ...dataMsg,
      userName: props.dataUser.nombre,
      imgUser: props.dataUser.fotoUrl,
      fecha: actualDate,
    });
  }, []);

  //Mostrar el formulario para nuevo mensaje
  const handleClick = () => {
    const overlay = document.querySelector(".overlay");
    overlay.classList.remove("hide");
    overlay.classList.add("mostrar-formulario");
  };
  //Ocultar el formulario
  const ocultarFormulario = () => {
    const overlay = document.querySelector(".overlay");
    overlay.classList.add("hide");
    overlay.classList.remove("mostrar-formulario");
  };

  //Agrego la data al hook/estado
  const handleChange = (e) => {
    setDataMsg({
      ...dataMsg,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(dataMsg);
    //Si no falta ningún dato
    if (dataMsg.fecha !== "" || dataMsg.nombreVideo !== "") {
      //Envio la data a la base de datos de firebase
      const db = app.firebase.database();
      const dbRef = db.ref("comentarios/").child(`/${props.idModulo}`);
      dbRef
        .push()
        .set(dataMsg)
        .catch((error) => console.log(error));

      //Si falta algún dato
    } else {
      //Mnesaje de alerta
      alert("Falta algún campo");
    }

    //Cierro el formulario
    ocultarFormulario();
  };

  //Hook para guardar el objeto con los comentarios
  const [comentarios, setComentarios] = useState([]);
  const db = app.database();
  const dbRef = db.ref("comentarios/").child(`/${props.idModulo}`);
  useEffect(() => {
    dbRef.on("value", (snapshot) => {
      if (snapshot.val()) {
        const data = Object.values(snapshot.val());
        setComentarios(data);
      }
    });
  }, []);

  return (
    <div className="seccion-comentarios container pb-5">
      <h3 className=" text-subtitle py-3 fw-bold text-center">
        Sección de preguntas
      </h3>
      <div className="d-flex flex-column-reverse comentarios align-items-center">
        {comentarios.map((comentario, i) => (
          <CardComentario {...comentario} key={i} />
        ))}
      </div>

      {comentarios.length === 0 && (
        <p className="text-center">
          ¡Sé el primero en realizar una pregunta y ayuda a los demás
          estudiantes!
        </p>
      )}
      <div className="text-center">
        <button className="btn btn-dark mt-3" onClick={handleClick}>
          Hacer una pregunta
        </button>
      </div>
      <div className="overlay hide">
        <Form
          className="bg-secondary rounded text-center py-3 container w-75"
          onSubmit={handelSubmit}
        >
          <p className="fw-bold">Completa los siguientes campos</p>
          <select
            name="nombreVideo"
            className="select-video w-100 mb-2 border-0 rounded"
            onChange={handleChange}
          >
            <option disabled selected>
              -selecciona el video sobre el que tienes dudas-
            </option>
            {props.videos.map((item, i) => (
              <option value={item.titulo}>{item.titulo}</option>
            ))}
          </select>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Escribe tu pregunta"
              required
              onChange={handleChange}
              name="msg"
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button
              variant="none"
              className="border border-dark border-2"
              onClick={ocultarFormulario}
            >
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Comentarios;
