import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "../components/Navigation";
import Landing from "../components/Landing";
import Contacto from "../components/Contacto";
import MisCursos from "../components/MisCursos";
import Footer from "../components/Footer";
import GoTopBtn from "../components/GoTopBtn";
import Login from "../components/Login";
import EmailVerification from "../components/EmailVerification";
import CursoInfo from "../components/CursoInfo";
import Carrito from "../components/Carrito";
import VisualizaciónCurso from "../components/VisualizaciónCurso";
import Finpago from "../components/Finpago";
function Routes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/miscursos" component={MisCursos} />
          <Route path="/login" component={Login} />
          <Route path="/emailverification" component={EmailVerification} />
          <Route path="/modulo" component={CursoInfo} />
          <Route path="/carrito" component={Carrito} />
          <Route path="/viewcurso" component={VisualizaciónCurso} />
          <Route path="/finpago" component={Finpago} />
        </Switch>
        <Footer />
      </BrowserRouter>
      <GoTopBtn />
    </React.Fragment>
  );
}

export default Routes;
