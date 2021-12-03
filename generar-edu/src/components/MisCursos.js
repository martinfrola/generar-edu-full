import React, { useState, useEffect } from "react";
import CardMisCursos from "../statics/CardMisCursos";
import { app } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";

function MisCursos(props) {
  const { history } = props;

  //Consulta a la autenticación de usuario para obtener datos
  const auth = getAuth();
  const [userId, setUserId] = useState();
  useEffect(() => {
    //Verifico si hay usuario
    onAuthStateChanged(auth, (user) => {
      console.log(user.uid);
      //Si NO hay usuario..
      if (!user) {
        //Llevarlo a que al login
        history.push("/login");

        //Si hay usuario
      } else {
        //Obtener id del usaurio
        setUserId(user.uid);
      }
    });
  }, [userId]);

  //Busco para ese usario que cursos tiene comprado
  const [cursosUser, setCursosUser] = useState();
  const db = getDatabase();

  useEffect(() => {
    const dbRef = ref(db, "permisosUser/" + userId);
    get(dbRef).then((snap) => {
      if (snap.exists()) {
        const split = snap.val().cursosTotales.split(",");
        setCursosUser(split);
      }
    });
  }, [userId]);

  //Busco en la base de datos de los cursos cual coincide.
  const [dataCursos, setDataCursos] = useState([]);

  useEffect(() => {
    //ingreso a la base de datos de los cursos
    const dbRef = ref(db, "cursos/");

    //Si existen cursos comprados...
    if (cursosUser) {
      //Reviso para cada uno de los cursos comprados si coincide el idModulo con el dato del curso
      cursosUser.map((cursoUser) => {
        get(dbRef).then((snap) => {
          const cursos = Object.values(snap.val());

          //Para cada curso en la db hago la revision
          cursos.map((curso) => {
            if (
              curso.idModulo == cursoUser &&
              curso !== dataCursos.cursosDelUsuario
            ) {
              setDataCursos((dataCursos) => [...dataCursos, curso]);
            }
          });
        });
      });
    }
  }, [cursosUser]);

  return (
    <div className="mis-cursos">
      <h1 className="text-subtitle fw-bold text-center py-5 text-dark">
        ¡Sigue aprendiendo en tus cursos!
      </h1>
      <main className="container mis-cursos-content m-auto justify-content-between pb-5">
        {dataCursos.length > 0 ? (
          dataCursos.map((data, i) => <CardMisCursos key={i} {...data} />)
        ) : (
          <p className="w-100 ">
            Ups, parece que todavía no has comprado ningún curso.
          </p>
        )}
      </main>
    </div>
  );
}

export default MisCursos;
