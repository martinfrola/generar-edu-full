import React, { useEffect, useState } from "react";
import CardCurso from "./CardCurso";
import { app } from "../firebase";
import { getDatabase, ref, set, get } from "firebase/database";

export default function AllCursos() {
  const [dataCursos, setDataCursos] = useState([]);

  const db = getDatabase();
  useEffect(() => {
    //ingreso a la base de datos de los cursos
    const dbRef = ref(db, "cursos/");
    get(dbRef).then((snap) => {
      const cursos = Object.values(snap.val());
      console.log(cursos.length);
      if (cursos.length > 0 && cursos.length) {
        cursos.map((curso) => {
          setDataCursos((dataCursos) => [...dataCursos, curso]);
        });
      }
    });
  }, []);

  console.log(dataCursos);
  return (
    <div className="bg-light pt-5">
      <h1 className="text-dark text-center pb-5 text-title fw-bold">
        Mirá nuestros cursos
      </h1>
      <div className="container row m-auto">
        {dataCursos.length > 0 &&
          dataCursos.map((curso, i) => <CardCurso key={i} {...curso} />)}
      </div>
    </div>
  );
}
