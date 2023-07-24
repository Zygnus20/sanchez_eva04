import React, { useEffect, useState , Component} from "react";
import "../App.css";
import Navegador from "./Navegador.js";

class LlenadoForm extends Component{
    render(){
        return(
            <>
            <Navegador/>
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4 bg-dark">
                        <h4>Ingresa tus datos y nos pondremos en contacto contigo.</h4>
                        <form>
                            <div className="mb-3">
                                <label for="nombre" className="form-label">Nombre y Apellido: </label>
                                <input type="text" name="form-control" id="nombre" placeholder="Escribe tu nombre" autofocus required/>
                            </div>
                            <div className="mb-3">
                                <label for="edad" className="form-label">Edad: </label>
                                <input type="number" name="form-control" id="edad" min="5" max="70" placeholder="Ingresa tu edad (años)" required/>
                            </div>
                            <div className="mb-3">
                                <label for="correo" className="form-label">Correo electrónico: </label><br/>
                                <input type="email" name="form-control" id="correo" placeholder=" Escribe un email válido" size="41" required/>
                            </div>
                            <div className="mb-3">
                                <label for="numero" className="form-label">Número telefónico: </label>
                                + 56 9 <input type="text" name="form-control" id="numero" size="15" minlength="8" maxlength="8" placeholder="Ingresa tu número" required/>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-success">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default LlenadoForm;