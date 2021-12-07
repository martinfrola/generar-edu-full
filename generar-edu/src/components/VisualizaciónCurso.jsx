import React, { useState, useEffect } from "react";
import ListaVideos from "../statics/ListaVideos";
import video from "../video/video-example.mp4";
import Comentarios from "../statics/Comentarios";
import { app } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "firebase/compat/database";

function VisualizaciónCurso(props) {
  // ------ CONSUMO DATA DE LOS CURSOS DESDE STRAPI ------
  const currentPath = window.location.pathname;

  const idModulo = currentPath.split("/")[2];

  // ------ CONSUMO DATA DE LOS VIDEOS DEL CURSO CORRESPONDIENTE -------
  const urlVideos = `https://generaredu.herokuapp.com/modulo-${idModulo}-s`;
  const [videos, setVideos] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(urlVideos)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  //------ CONSUMO LA DATA DEL USUARIO ------

  //Hook para guardar la data
  const [dataUser, setDataUser] = useState({
    nombre: "",
    fotoUrl: "",
    userId: "",
  });

  useEffect(() => {
    //Consulta a la autenticación de usuario para obtener datos
    const auth = getAuth();

    //Verifico si hay usuario
    onAuthStateChanged(auth, (user) => {
      //Si hay usuario..
      if (user) {
        //Consumo la data del usuario y la seteo en el hook
        setDataUser({
          nombre: user.displayName,
          fotoUrl: user.photoURL,
          userId: user.uid,
        });

        //Si no hay usuario
      } else {
        //Lo envío a la página de logeo para que se inicie sesión
        props.history.push("/login");
      }
    });
  }, []);

  return (
    <div className="view-curso bg-light">
      {/* Si hay info en el hook de modulos y videos renderiza el componente */}
      {videos && (
        <ListaVideos
          dataUser={dataUser}
          idModulo={idModulo}
          videos={videos}
          urlVideos={urlVideos}
        />
      )}

      {videos && (
        <Comentarios dataUser={dataUser} idModulo={idModulo} videos={videos} />
      )}
    </div>
  );
}

export default VisualizaciónCurso;
