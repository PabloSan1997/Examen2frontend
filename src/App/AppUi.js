import React from "react";
import { Buscador } from "../buscador";
import { Contenedor } from "../Contenedor";
import { Formulario } from "../formulario";
import { Titulo } from "../titulo";

function AppUi(){
    return(
       <React.Fragment>
        <Titulo/>
        <Formulario/>
        <Buscador/>
        <Contenedor/>
       </React.Fragment>
    );
}


export{AppUi}