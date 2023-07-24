import React, {Component} from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import InicioPag from "./components/InicioPag";
import LlenadoForm from "./components/Formulario";
import Carrusel from "./components/Carrusel";
import Factorial from "./components/Factorial";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Routes>
          <Route path="/" element={<InicioPag />}/>
          <Route path="/formulario-contacto" element={<LlenadoForm />}/>
          <Route path="/informacion" element={<Carrusel />}/>
          <Route path="/factorial" element={<Factorial />}/>
        </Routes>
      </div>
    );
  }
}

export default App;
