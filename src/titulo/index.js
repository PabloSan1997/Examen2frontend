import React from "react";
import { Contexto } from "../contextos";
import './index.css'

function Titulo() {
  const { datos } = React.useContext(Contexto);
  let malas = [];
  let preg=0;
  if (typeof datos === "object") {
    preg=datos.length;
    malas = datos.filter((elem) => {
      for (let i = 0; i < elem.respuestas.length; i++) {
        if (elem.respuestas[i].estado) {
          return true;
        }
      }
    });
  }

  return (
    <div className="titulo">
      <h1 className="tit">Ayuda examen</h1>
      <div className="nose">
        <p className="texto">Pregutnas totales:{preg} </p>
        <p className="texto">Errores: {malas.length}</p>
      </div>
    </div>
  );
}
export { Titulo };
