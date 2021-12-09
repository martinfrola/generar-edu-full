import React, { useState, useEffect } from "react";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
export default function Footer() {
  const [dataCursos, setDataCursos] = useState([]);

  const db = getDatabase();
  useEffect(() => {
    //ingreso a la base de datos de los cursos
    const dbRef = ref(db, "cursos/");
    get(dbRef).then((snap) => {
      const cursos = Object.values(snap.val());

      if (cursos.length > 0 && cursos.length) {
        cursos.map((curso) => {
          setDataCursos((dataCursos) => [...dataCursos, curso]);
        });
      }
    });
  }, []);
  console.log(dataCursos);
  return (
    <footer className="bg-primary text-light pt-3">
      <div className="row container m-auto pb-3">
        <div className="col-md-4 text-center pb-3">
          <h4 className="text-subtitle">Nuestras Redes</h4>
          <div className="redes-logo pt-1">
            <a href="/">
              <img src={Facebook} alt="facebook logo red color" />
            </a>
            <a href="/">
              <img src={Instagram} alt="instagram color red color" />
            </a>
          </div>
        </div>
        <div className="col-md-4 text-center pb-3">
          <h4 className="text-subtitle">Nuestros Cursos</h4>
          <div className="cursos">
            {dataCursos.length > 0 &&
              dataCursos.map((curso, i) => {
                return (
                  <a
                    key={i}
                    className="text-text text-light"
                    href={`/modulo/${curso.idModulo}`}
                  >
                    {curso.titulo}
                  </a>
                );
              })}
          </div>
        </div>
        <div className="col-md-4 text-center contacto-footer pb-3">
          <h4 className="text-subtitle">Contactanos</h4>
          <a className="text-text text-light" href="/">
            +54-9291-4418765
          </a>
          <a className="text-text text-light" href="/">
            generaredu@edu.com
          </a>
        </div>
      </div>
      <div className=" container text-center">
        <p className="text-text">
          Todos los derechos reservados 2021 &copy; Generar Edu{" "}
        </p>
        <div className="tench">
          <p className=" text-details">Creado por</p>
          <a
            className=" text-details text-light"
            href="https://tench-arg.web.app/"
          >
            Tench
          </a>
        </div>
      </div>
    </footer>
  );
}
