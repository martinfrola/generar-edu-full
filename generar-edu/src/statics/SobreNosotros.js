import React from "react";
import Wave from "../img/wave.svg";
import IconoEducacion from "../img/icono-educacion.svg";
import IconoProfesora from "../img/icono-profesora.svg";
import IconoCoaching from "../img/icono-coaching.svg";
export default function SobreNosotros() {
  return (
    <React.Fragment>
      <div className="bg-light">
        <img src={Wave} alt="wave for background" />
      </div>
      <div className="bg-dark">
        <h2 className="text-light text-center pb-5 text-title fw-bold">
          Conoce más sobre nosotros
        </h2>
        <div className=" container text-center text-text text-light">
          Generar Edu es un espacio digital creado para brindar la posibilidad
          de acompañarte a transitar los primeros pasos en tu rol como
          profesional de la salud, facilitándote herramientas básicas para que
          logres desde el análisis completo, planificar una evaluación y el
          tratamiento de tus pacientes desde el conocimiento teórico llevándolo
          a la práctica.
        </div>
        <div className="container img-renata">
          <img
            src="https://thispersondoesnotexist.com/image"
            alt="Renata Britos licensiada en kinesilogía"
            className="rounded-circle"
          />
          <div className="text-light content-renata">
            <h4 className="text-secondary text-subtitle">Renata Britos</h4>
            <p className="text-text">
              Me llamo Renata Britos, soy profesional de la salud titulada en
              Lic. En kinesiología y Fisioterapia en la Universidad Nacional de
              Córdoba, Argentina, desde hace 18 años. Con el transcurso del
              tiempo me fui formando y especializando en el área de la
              rehabilitación neurológica.
            </p>
            <p className="text-text">
              Durante mi carrera profesional trabajé durante muchos años en un
              instituto de rehabilitación integral de la ciudad de Bahía Blanca,
              donde tuve la posibilidad de cumplir un cargo como Jefa de
              Servicio de Rehabilitación.{" "}
            </p>
            <p className="text-text">
              Me desempeñé en consultorios privados tomando experiencia y
              conocimiento en el área de traumatología.{" "}
            </p>
            <p className="text-text">
              Fuí Becaria durante un período de dos años en el Hospital
              Municipal de Agudos Dr. Leónidas Lucero, en el área de clínica
              médica.
            </p>
            <p className="text-text">
              {" "}
              Actualmente integro un equipo interdisciplinario en un centro de
              privado de rehabilitación integral.
            </p>
          </div>
        </div>
        <div className="skills container py-5">
          <div className="row">
            <div className="col-md-6 text-center skill ">
              <img src={IconoEducacion} alt="" />
              <h4 className="text-secondary mt-2 text-subtitle">
                Constante Formación
              </h4>
              <p className="text-light text-text">
                En proceso de formación en Coaching, finalizando la carrera de
                docencia universitaria.
              </p>
            </div>
            <div className=" col-md-6 text-center skill ">
              <img src={IconoProfesora} alt="" />
              <h4 className="text-secondary mt-2 text-subtitle">Docente</h4>
              <p className="text-light text-text">
                Hace 8 años me desempeño como docente en la carrera de Lic.en
                Kinesiología y Fisiatría.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
