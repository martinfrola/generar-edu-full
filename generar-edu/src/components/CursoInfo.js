import React, { useEffect, useState } from "react";
import { app } from "../firebase";
import { getDatabase, ref, set, get } from "firebase/database";
export default function CursoInfo() {
  const [dataCurso, setDataCurso] = useState({});
  const currentPath = window.location.pathname;
  const idModulo = currentPath.split("/")[2];
  useEffect(() => {
    window.scrollTo(0, 0);
    const db = getDatabase();
    const dbRef = ref(db, `cursos/modulo-${idModulo}`);
    get(dbRef).then((snap) => {
      setDataCurso(snap.val());
    });
  }, []);

  const storage = app.storage();
  const storageRef = storage
    .ref()
    .child(`Modulo ${idModulo}/modulo${idModulo}-intro.MP4`);
  storageRef.getDownloadURL().then(function (url) {
    console.log(url);
  });

  return (
    <div className="info-curso bg-light">
      <div className="header-curso">
        <div className="container header-curso_title">
          {" "}
          <h1 className="text-title fw-bold text-dark">{dataCurso.titulo}</h1>
        </div>
      </div>
      <div className="my-5 container curso-main">
        <div className="info-content">
          <div className="deque">
            <h3 className="text-subtitle">¿De qué se trata este curso?</h3>
            <p className="text-text">{dataCurso.descripcion_larga}</p>
          </div>
          <div className="paraquien">
            <h3 className="text-subtitle">
              ¿Para quién está dirigido este curso?
            </h3>
            <p className="text-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              architecto libero assumenda voluptas cumque non, quasi esse quam
              corrupti quae cupiditate ipsum at maxime deserunt minus veritatis
              mollitia ad impedit!
            </p>
            <p className="text-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, natus
              dolorem! Autem vitae magnam ducimus officia rem perferendis
              beatae, quisquam deserunt, sit, amet dolorum. Quia nam quo
              mollitia eaque laudantium!
            </p>
          </div>
        </div>
        <div className="compra-content bg-secondary text-center">
          <h4 className="text-subtitle text-dark fw-bold pt-4">
            Compra este curso por solo
          </h4>
          <p className="text-title text-dark fw-bold">${dataCurso.precio}</p>
          <div className="btns-curso d-flex flex-column align-items-center">
            <button className="btn btn-none border-2 border-dark mb-4 w-75">
              Agregar al Carrito
            </button>
            <button className="btn btn-dark mb-4 w-75">Comprar Ahora</button>
          </div>

          <div className="curso-incluye text-align-left text-dark">
            <p className="text-text text-dark fw-bold">Este curso incluye:</p>
            <div className="incluye-content text-text text-start ms-2 d-flex align-items-center m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-clock me-1"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#852747"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 15 15" />
              </svg>
              <p className="m-0">
                {dataCurso.horas_contenido} horas de contenido
              </p>
            </div>
            <div className="incluye-content text-text text-start ms-2 d-flex align-items-center m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-video me-1"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#852747"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                <rect x="3" y="6" width="12" height="12" rx="2" />
              </svg>
              <p className="m-0"> {dataCurso.cantidad_videos} videos</p>
            </div>
            <div className="incluye-content text-text text-start ms-2 d-flex align-items-center m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-infinity me-1"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#852747"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9.828 9.172a4 4 0 1 0 0 5.656a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828" />
              </svg>
              <p className="m-0">Acceso de por vida</p>
            </div>
            <div className="incluye-content text-text text-start ms-2 d-flex align-items-center m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-certificate  me-1"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#852747"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="15" cy="15" r="3" />
                <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                <line x1="6" y1="9" x2="18" y2="9" />
                <line x1="6" y1="12" x2="9" y2="12" />
                <line x1="6" y1="15" x2="8" y2="15" />
              </svg>
              <p className="m-0">Certificado al finalizar</p>
            </div>
          </div>
        </div>
      </div>

      <div className="video-trailer container text-center pb-5">
        <p className="text-dark">Mirá un adelanto del curso</p>
        <video
          src={dataCurso.video_intro}
          controls
          controlslist="nodownload"
        ></video>
      </div>
    </div>
  );
}
