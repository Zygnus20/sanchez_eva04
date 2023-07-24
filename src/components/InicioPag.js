import React, {Component} from "react";
import "../App.css";
import Navegador from "./Navegador.js";
import TituloLanding from "./Titulo.js";
import Parrafos from "./Parrafos.js";
import ajedrez from "../ajedrez.jpg";
import pderecha from "../pderecha.png";
import pizquierda from "../pizquierda.png";
import BotonFormulario from "./BotonFormulario.js";


const InicioPag = () => {
  return (
    <div>  
      <Navegador/>
      <div className="container titulo">
        <img src={pizquierda} className="pizquierda"/>Ludum Night<img src={pderecha} className="pderecha"/>
      </div>
      <div className="container contenido">
        <div className="card bg-dark text-white">
          <img src={ajedrez} className="card-img imagen"/>
          <div className="card-img-overlay">
            <TituloLanding/>
            <Parrafos/>
            <div className="d-grid gap-2">
              <BotonFormulario/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InicioPag;