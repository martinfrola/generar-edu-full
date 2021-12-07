import React, { useEffect, useState } from "react";
import Facebook from "../img/facebook.png";
import Google from "../img/google.png";
import { app } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";

export default function Login(props) {
  //Consulta a la autenticación de usuario para obtener datos
  const auth = getAuth();
  useEffect(() => {
    window.scrollTo(0, 0);
    //Verifico si hay usuario
    onAuthStateChanged(auth, (user) => {
      //Si hay usuario..

      if (user) {
        if (user.emailVerified) {
          props.history.push("/");
        } else {
          sendEmailVerification(auth.currentUser).then(() => {
            props.history.push("/emailverification");
          });
        }
      }
    });
  }, [auth]);

  //HOOK PARA TOMAR LOS DATOS DE LOS CAMPOS DE EMAIL Y PASSWORD
  const [userLog, setUser] = useState({
    email: "",
    psw: "",
  });

  //SIGNIN CON GOOGLE
  function signInGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //SIGNIN CON FACEBOOK
  function signInFacebook() {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //GUARDAR LOS DATOS EN EL ESTADO
  function handleChange(e) {
    setUser({
      ...userLog,
      [e.target.name]: e.target.value,
    });
  }

  //LOGIN CON EMAIL Y CONTRASEÑA
  function handleLogin(e) {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userLog.email, userLog.psw)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log("hubo un error", error);
        // ..
      });
  }

  //MOSTRAR FORMULARIO CUANDO NECESITAMOS CREAR NUEVA CUENTA
  function ShowForm() {
    window.scrollTo(0, 0);
    const hide = document.querySelector(".container-login");
    const title = document.querySelector(".login-title");
    const show = document.querySelector(".new-acount");
    hide.classList.toggle("hide");
    title.classList.toggle("hide");
    show.classList.toggle("hide");
  }

  //CREAR NUEVA CUENTA
  function handleNewAcount(e) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userLog.email, userLog.psw)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  }

  //
  function showFormPsw() {
    window.scrollTo(0, 0);
    const hide = document.querySelector(".container-login");
    const title = document.querySelector(".login-title");
    const showPsw = document.querySelector(".new-psw");
    hide.classList.toggle("hide");
    title.classList.toggle("hide");
    showPsw.classList.toggle("hide");
  }

  function handleNewPsw(e) {
    const auth = getAuth();
    sendPasswordResetEmail(auth, userLog.email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
    e.preventDefault();
  }

  return (
    <div className="login bg-white pt-5">
      <h2 className="text-center login-title text-subtitle">
        Inicia sesión en tu cuenta
      </h2>
      <div className="container-login mx-auto mb-5 text-center show-form">
        <div className="buttons">
          <div className="login-btn" onClick={signInFacebook}>
            <img src={Facebook} alt="" />
            <p className="text-text fw-bold text-dark">
              Iniciá sesión con Facebook
            </p>
          </div>
          <div className="login-btn" onClick={signInGoogle}>
            <img src={Google} alt="" />
            <p className="text-text fw-bold text-dark">
              Iniciá sesión con Google
            </p>
          </div>

          <h3 className="text-subtitle text-dark">Ingresá con tu email</h3>
          <form className="login-email d-flex flex-column">
            <input
              type="email"
              name="email"
              placeholder="Tu Email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="psw"
              placeholder="Tu Contraseña"
              onChange={handleChange}
            />
            <button
              className="btn text-text bg-dark text-light"
              onClick={handleLogin}
            >
              {" "}
              Inicia sesión
            </button>
          </form>
          <div className="d-flex justify-content-center m-auto pt-3">
            <p className="text-details me-1">¿Olvidaste tu contraseña?</p>
            <p
              className="text-details text-primary fw-bold btn-new-psw"
              onClick={showFormPsw}
            >
              Recuperar contraseña
            </p>
          </div>
          <div className="d-flex justify-content-center m-auto">
            <p className="me-1 text-details">¿No tienes una cuenta?</p>
            <p
              className="text-primary fw-bold btn-new-acount text-details"
              onClick={ShowForm}
            >
              Crear cuenta
            </p>
          </div>
        </div>
      </div>

      <div className="new-acount bg-dark pt-4 hide text-text">
        <button
          className="bg-light border-0 rounded-1 mb-3 btn-volver"
          onClick={ShowForm}
        >
          Volver
        </button>
        <h3 className="text-text text-center text-light pb-4">
          Crea tu cuenta y lleva tus conocimientos a la práctica.
        </h3>
        <form
          className="login-email d-flex flex-column"
          onSubmit={handleNewAcount}
        >
          <input type="text" name="name" placeholder="Nombre completo" />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
          />
          <input
            type="password"
            name="psw"
            placeholder="Contraseña"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-light border-0 rounded-1 mb-3 btn-crear"
          >
            Crear
          </button>
        </form>
      </div>

      <div className="new-psw  bg-dark pt-4 hide text-text">
        <button
          className="bg-light border-0 rounded-1 mb-3 btn-volver"
          onClick={showFormPsw}
        >
          Volver
        </button>
        <h3 className="text-text text-center text-light pb-4">
          Escribe tu email y recupera tu contraseña
        </h3>
        <form
          className="login-email d-flex flex-column"
          onSubmit={handleNewPsw}
        >
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-light border-0 rounded-1 mb-3 btn-crear"
          >
            Recuperar contraseña
          </button>
        </form>
      </div>
    </div>
  );
}
