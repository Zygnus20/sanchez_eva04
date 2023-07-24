import React, { useEffect, useState , Component} from "react";
import queajedrez from "../queajedrez.jpeg"
import comoajedrez from "../comoajedrez.jpg"
import paraajedrez from "../paraajedrez.jpg"
import "../App.css";
import Navegador from "./Navegador";

class Carrusel extends Component{
    render(){
        return(
            <>
            <Navegador/>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-inner">
                    <img src={queajedrez} className="d-block w-100"/>
                    <div className="carousel-caption d-none d-md-block a">
                        <h5>¿Qué es el ajedrez?</h5>
                        <p>El ajedrez es un juego de estrategia en el que se enfrentan dos jugadores, cada uno de los cuales tiene 16 piezas de valores diversos que pueden mover, siguiendo ciertas reglas, sobre un tablero dividido en cuadrados blancos y negros. El objetivo final del juego consiste en “derrocar al rey” del oponente.</p>
                    </div>
                    </div>
                    <div className="carousel-inner">
                    <img src={paraajedrez} className="d-block w-100"/>
                    <div className="carousel-caption d-none d-md-block b">
                        <h5>¿Para qué sirve el ajedrez?</h5>
                        <p>El ajedrez es considerado un deporte mental, ya que trasciende al propio juego. Incluso hay quien lo eleva a la categoría de arte y ciencia. Además, es divertido, saludable y puede practicarlo personas de todas las edades.</p>
                    </div>
                    </div>
                    <div className="carousel-inner">
                    <img src={comoajedrez} className="d-block w-100"/>
                    <div className="carousel-caption d-none d-md-block c">
                        <h5>¿Cómo nos ayuda el ajedrez en nuestra vida cotidiana?</h5>
                        <p>El ajedrez desarrolla una memoria visual excepcional, poder combinatorio, velocidad de cálculo, concentración, pensamiento lógico y transversal, además de estructurar las mentes de manera armónica.</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
}

export default Carrusel;