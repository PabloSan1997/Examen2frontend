import React from "react";
import { Contexto } from "../contextos";

function Buscador(){
    const{setTextoBuscador, textoBuscador}=React.useContext(Contexto);
    return(
        <div className="buscador">
            <label>Buscador</label>
            <input className="buscar"
             placeholder="Escribir..."
             value={textoBuscador}
             onChange={(e)=>setTextoBuscador(e.target.value)}
             />
        </div>
    );
}
export{Buscador}