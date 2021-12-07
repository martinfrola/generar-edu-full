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
        <div className="container img-renata">
          <img
            src="https://thispersondoesnotexist.com/image"
            alt="Renata Britos licensiada en kinesilogía"
            className="rounded-circle"
          />
          <div className="text-light content-renata">
            <h4 className="text-secondary text-subtitle">Renata Britos</h4>
            <p className="text-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet
              illo molestiae tempore facere ab aut provident animi ipsam
              cupiditate mollitia, quos impedit minus odio reprehenderit? Vitae
              deleniti minus illum! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Sint, dolorem! Culpa ea aliquid nihil fuga
              tempore suscipit maiores ad quae tempora adipisci? Voluptas minima
              quod itaque asperiores corrupti, ratione quos.
            </p>
          </div>
        </div>
        <div className="skills container py-5">
          <div className="row">
            <div className="col-md-4 text-center skill ">
              <img src={IconoEducacion} alt="" />
              <h4 className="text-secondary mt-2 text-subtitle">
                Constante Formación
              </h4>
              <p className="text-light text-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur sequi suscipit ex voluptas expedita aspernatur labore
                voluptates repellat cumque, architecto vero, iste deserunt qui
                fugit odit, rem sint animi non!
              </p>
            </div>
            <div className=" col-md-4 text-center skill ">
              <img src={IconoProfesora} alt="" />
              <h4 className="text-secondary mt-2 text-subtitle">Docente</h4>
              <p className="text-light text-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur sequi suscipit ex voluptas expedita aspernatur labore
                voluptates repellat cumque, architecto vero, iste deserunt qui
                fugit odit, rem sint animi non!
              </p>
            </div>
            <div className=" col-md-4 text-center skill ">
              <img src={IconoCoaching} alt="" />
              <h4 className="text-secondary mt-2 text-subtitle">Coach</h4>
              <p className="text-light text-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur sequi suscipit ex voluptas expedita aspernatur labore
                voluptates repellat cumque, architecto vero, iste deserunt qui
                fugit odit, rem sint animi non!
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
