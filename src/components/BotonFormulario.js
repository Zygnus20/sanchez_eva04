import React, { useEffect, useState , Component} from "react";
import "../App.css";
import {Link} from "react-router-dom"

class Navegador extends Component{
    render(){
        return(
            <div className="d-grid gap-2">
                <Link to="/formulario-contacto"><button className="btn btn-success">¡SUSCRIBETE AQUÍ!</button></Link>
            </div>
        );
    }
}

export default Navegador;