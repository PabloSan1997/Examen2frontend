import React from "react";
function useLeerDatos(){
    const [data, setDatos]=React.useState([]);
    const [cargar, setCargar]=React.useState(0);
    const [error, setError]=React.useState(false);
    React.useEffect(
        ()=>{(async ()=>{
            try {
                const info = await fetch('http://localhost:3005/api/v1/preguntas/');
                const informacion = await info.json();
                if(informacion.statusCode===404){
                    throw {...informacion, sin:true};
                }
                 setDatos(informacion);
                 setCargar(1);
            } catch (error) {
                if(error.sin){
                    setDatos(error.message);
                }else{
                    setError(true);
                }
                setCargar(2);
            }
        })();
    }
        ,[cargar]);
    return{data, cargar, error};
}
export{useLeerDatos}