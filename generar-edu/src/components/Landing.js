import React, { useState, useEffect } from "react";
import Header from "../statics/Header";
import AllCursos from "../statics/AllCursos";
import SobreNosotros from "../statics/SobreNosotros";
import RandomMsg from "../statics/RandomMsg";

function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <AllCursos />
      <SobreNosotros />
      <RandomMsg />
    </React.Fragment>
  );
}

export default Landing;
