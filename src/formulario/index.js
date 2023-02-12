import React from "react";
import { Contexto } from "../contextos";

function Formulario(){
    const {agregarPregunta}=React.useContext(Contexto);
    const [valor, setValor]=React.useState('');
    return(
        <div className="formulario">
            <div className="area-texto">
                <label>Pregunta</label>
                <input className="entrada" placeholder="Escribir..." onChange={(e)=>setValor(e.target.value)}/>
            </div>
            <div className="area-boton">
                <button className="boton" onClick={()=>agregarPregunta({pregunta:valor})}>Enviar</button>
            </div>
        </div>
    );
}

export{Formulario}