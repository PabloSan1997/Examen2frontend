import React from "react";
import { agregarPregunta } from "./sAgregarPregunta.js";
import { agregarRespuesta } from "./sAgregarRespuesta.js";
import { borrarPregunta } from "./sborrarPregunta.js";
import { borrarRespuesta } from "./sborrarRespuesta.js";
import { editarPregunta } from "./sEditarPregunta.js";
import { editarRespuesta } from "./sEditarRespuestas.js";
import { useLeerDatos } from "./sLeerDatos.js";

const Contexto = React.createContext();

function Provedor({children}){
    const {data, cargar, error}=useLeerDatos();
    const [textoBuscador, setTextoBuscador]=React.useState('');
    let datos;
    if(cargar===1 && textoBuscador!=''){
      let nuevos = data.filter(elem=>{
        let preg = elem.pregunta.toLocaleUpperCase();
        let busc = textoBuscador.toLocaleUpperCase();
        return preg.includes(busc);
      }
      );
      datos=nuevos;
    }else{
      datos=data
    }
    return (
      <Contexto.Provider
      value={
        {
          datos,
          cargar,
          error,
          agregarPregunta,
          agregarRespuesta,
          borrarPregunta,
          borrarRespuesta,
          editarRespuesta,
          editarPregunta,
          textoBuscador, 
          setTextoBuscador
        }
      }
      >
        {children}
      </Contexto.Provider>
    );
}
export{Contexto, Provedor}