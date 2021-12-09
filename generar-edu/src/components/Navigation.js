import React, { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Cart from "../img/shopping-cart.png";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useCarrito } from "../context/CarritoProvider";
import { initialCarrito } from "../context/CarritoRedicer";
import { app } from "../firebase";

export default function Navigation() {
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const iniciarSesion = document.querySelector(".iniciar-sesion");
        const cerrarSesion = document.querySelector(".cerrar-sesion");
        const misCursos = document.querySelector(".mis-cursos-link");
        iniciarSesion.classList.add("hide");
        cerrarSesion.classList.remove("hide");
        misCursos.classList.remove("hide");
      } else {
        const cerrarSesion = document.querySelector(".cerrar-sesion");
        const iniciarSesion = document.querySelector(".iniciar-sesion");
        const misCursos = document.querySelector(".mis-cursos-link");
        cerrarSesion.classList.add("hide");
        misCursos.classList.add("hide");
        iniciarSesion.classList.remove("hide");
      }
    });
  });

  function signOutUser() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Cerraste Sesion");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [{ productos }, dispatch] = useCarrito(initialCarrito);

  return (
    <div className="bg-dark navigation">
      <div className="d-flex container">
        <Navbar expand="lg" className="w-100 pe-2">
          <Link to="/">
            <Navbar.Brand href="#home" className="text-light">
              Generar Edu
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-end">
              <Link to="/">
                <Nav.Link href="#home" className="text-light text-text">
                  Inicio
                </Nav.Link>
              </Link>
              <Link to="/miscursos" className="mis-cursos-link">
                <Nav.Link href="#home" className="text-light text-text">
                  Mi Cursos
                </Nav.Link>
              </Link>

              <Link to="/contacto">
                <Nav.Link href="#link" className="text-light text-text">
                  Contacto
                </Nav.Link>
              </Link>

              <Link to="/" className="cerrar-sesion" onClick={signOutUser}>
                <Nav.Link href="#link" className="text-light text-text">
                  Cerrar Sesión
                </Nav.Link>
              </Link>
              <Link to="/login" className="iniciar-sesion">
                <Nav.Link href="#link" className="text-light text-text">
                  Iniciar Sesión
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Link to="/carrito">
          <div className="cart-icon">
            <img src={Cart} alt="Shopping cart" />
            {productos.length !== 0 ? (
              <div className="cart-products bg-secondary text-center align-items-center ">
                <p className="m-0 text-details ">{productos.length}</p>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
