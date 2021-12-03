import React from "react";
import ReactDOM from "react-dom";
import "./sass/app.scss";
import "./_bootstrap.scss";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Routes from "./routes/Routes";
import { CarritoProvider } from "./context/CarritoProvider";
import reducer, { initialCarrito } from "./context/CarritoRedicer";

ReactDOM.render(
  <React.StrictMode>
    <CarritoProvider reducer={reducer} initialCarrito={initialCarrito}>
      <Routes />
    </CarritoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
