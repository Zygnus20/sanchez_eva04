import React, { useEffect, useState , Component} from "react";
import "../App.css";
import {Link} from "react-router-dom"

class Navegador extends Component{
    render(){
        return(
            <>
            <nav className="nav">
                <a className="nav-link Inicio" aria-current="page" target="_blank"><Link to="/">Inicio</Link><br/></a>
                <a className="nav-link Informacion" target="_blank"><Link to="/informacion">Información</Link><br/></a>
                <a className="nav-link Calculadora-Factorial" target="_blank"><Link to="/factorial">Calculadora Factorial</Link><br/></a>
            </nav>
            </>
        );
    }
}

export default Navegador;