import React from "react";

export default function RandomMsg() {
  // window.addEventListener("scroll", animation);

  // function animation() {
  //   const actives = document.querySelectorAll(".msg-content");

  //   //Si la pantalla es mas grande que 768px:
  //   if (window.innerWidth > 768) {
  //     if (window.scrollY >= 2400) {
  //       //Cuando hago scroll hacia abajo
  //       actives.forEach((active) => {
  //         active.classList.add("show-animation");
  //         active.classList.remove("hide");
  //       });
  //     } else if (window.scrollY <= 10) {
  //       //Cuando hago scroll hacia arriba
  //       actives.forEach((active) => {
  //         active.classList.remove("show-animation");
  //         active.classList.add("hide");
  //       });
  //     }
  //     //Si la pantalla es mas pequeña que 768px:
  //   } else {
  //     //Cuando hago scroll hacia abajo
  //     if (window.scrollY >= 4400) {
  //       actives.forEach((active) => {
  //         active.classList.add("show-animation");
  //         active.classList.remove("hide");
  //       });
  //     } else if (window.scrollY <= 10) {
  //       //Cuando hago scroll hacia arriba
  //       actives.forEach((active) => {
  //         active.classList.remove("show-animation");
  //         active.classList.add("hide");
  //       });
  //     }
  //   }
  // }

  return (
    <div className="random-msg bg-dark py-5">
      <div className="msg-content bg-secondary ">
        <img
          src="https://thispersondoesnotexist.com/image"
          alt="name of the person how comented"
        />
        <div className="msg-text">
          <h4 className="text-subtitle">Juan Sinnombre</h4>
          <p className="text-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet
            error magni. Non repudiandae ut aliquam commodi, doloribus
            laudantium blanditiis nobis? Quos asperiores repudiandae itaque
            aliquam totam quasi animi necessitatibus.
          </p>
        </div>
      </div>
    </div>
  );
}
