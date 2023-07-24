import React, { useEffect, useState , Component} from "react";
import "../App.css";

class Parrafos extends Component{
    render(){
        return(
            <div>
                <p className="card-text1">El ajedrez es una herramienta que mejora el desarrollo cognitivo y la resolución de problemas en situaciones de estrategía, por lo que mejora el procesamiento de datos y situaciones de una mejor manera en niños(as), adultos(as) y personas de la tercera edad.</p>
                <p className="card-text2">¡No pierdas la oportunidad de ser el próximo Bobby Fischer del ajedrez!</p>
            </div>
        );
    }
}

export default Parrafos;
