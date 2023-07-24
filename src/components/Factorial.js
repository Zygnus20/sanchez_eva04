import React, {Component} from "react";
import "../App.css";
import Navegador from "./Navegador";

class Factorial extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero: '',
            factorial: null
        };
    this.calculando = this.calculando.bind(this)
    this.handleNumeroForm = this.handleNumeroForm.bind(this)
    }
    calculando = () => {
      const{numero}=this.state;
      if(numero == 0){
        this.setState({factorial: null})
        alert('Favor ingresar un número válido y positivo')
        return;
      }
      const confirmarNumero = parseInt(numero);
      if (confirmarNumero < 0){
        this.setState({factorial: 'Favor ingresar un número válido y positivo'});
        alert('Favor ingresar un número válido y positivo')
        return;
      }
      let resultado = 1;
      for (let i = 2; i <= numero; i++){
        resultado*=i
      }
      alert('El número es ' + confirmarNumero + ' y su factorial es '+ resultado)
      this.setState({factorial:'El número es ${numero} y su factorial es ${resultado}'});
    };
    handleNumeroForm = (variable) => {
      this.setState({ numero: variable.target.value});
    };
    render(){
      const listaDeNumeros = Array.from({length:30},(_, index) => index +1);
      const {numero,factorial} = this.state
      return(
        <>
          <Navegador/>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4 bg-dark">
              <h4>Ingrese un número positivo para saber su factorial</h4>
              <form>
                <div class="mb-3">
                  <label for="exampleInputPassword1" className="form-label"> Número: </label>
                  <input type="number" value={numero} onChange={this.handleNumeroForm} placeholder='Ingrese un número positivo' className="form-control"/>
                </div>
                <button onClick={this.calculando}>Calcular Factorial</button>
              </form>
            </div>
          </div><br/>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4 bg-dark">
              <h4>Escoja un número para saber su factorial</h4>
              <form>
                <div className="mb-3">
                  <label for="et1" className="form-label">Número: </label>
                  <select className="form-select" value={numero} onChange={this.handleNumeroForm} aria-label="Default select example">
                      <option selected value="0">Escoge un número</option>
                      {listaDeNumeros.map((numero) => (
                        <option key={numero} value={numero}>
                          {numero}
                        </option>
                      ))}
                  </select>          
                </div>
                <button onClick={this.calculando}>Calcular Factorial</button>
              </form>
            </div>
          </div>
        </>
      );
  }
}
export default Factorial;
