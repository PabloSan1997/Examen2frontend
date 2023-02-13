import React from "react";
import { Contexto } from "../contextos";

function Confirmar(){
    const {setconfirm, borrarTodo}=React.useContext(Contexto);
    return(
        <div className="confirmar">
            <div className="contenedor">
                <p className="texto">¿Desea borrar todos los elementos?</p>
                <div className="area-botones">
                    <button className="boton" onClick={borrarTodo}>Aceptar</button>
                    <button className="boton" onClick={()=>setconfirm(false)}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}
export{Confirmar}