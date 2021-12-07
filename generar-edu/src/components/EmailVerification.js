import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { app } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function EmailVerification(props) {
  //Consulta a la autenticación de usuario para obtener datos
  const auth = getAuth();

  const [userData, setUserData] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    //Verifico si hay usuario
    onAuthStateChanged(auth, (user) => {
      //Si hay usuario..

      if (user) {
        setUserData(user);
      }
    });
  }, [auth]);
  console.log(userData);
  return (
    <div className="py-5 text-center verificacion-email bg-light">
      {userData.emailVerified ? (
        <h3 className="pt-5 text-subtitle">
          Tu cuenta fué verificada correctamente
        </h3>
      ) : (
        <div className="container">
          <h3 className="pt-5 text-subtitle">
            Te enviamos un correo para verificar tu identidad. Por favor, accede
            al link que te enviamos y verifica tu cuenta.
          </h3>
          <p className="pt-3">
            ¡Revisa tambien tu casilla de spam o correos no deseados!
          </p>
        </div>
      )}
      <Link to="/">
        <button className="btn btn-primary">Volver al sitio</button>
      </Link>
    </div>
  );
}
