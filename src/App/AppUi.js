import React from "react";
import { Buscador } from "../buscador";
import { Confirmar } from "../confirmar";
import { Contenedor } from "../Contenedor";
import { Contexto } from "../contextos";
import { Formulario } from "../formulario";
import { Titulo } from "../titulo";

function AppUi(){
    const {confirm}=React.useContext(Contexto);
    return(
       <React.Fragment>
        <Titulo/>
        <Formulario/>
        <Buscador/>
        <Contenedor/>
       {confirm && <Confirmar/>}
       </React.Fragment>
    );
}


export{AppUi}