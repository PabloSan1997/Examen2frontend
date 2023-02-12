
async function borrarPregunta(id1){
    try{
        const solicitud = {
            method:"DELETE",
            headers:{'Content-Type':'application/json'}
        }
        const enviar = await fetch(`http://localhost:3005/api/v1/preguntas/${id1}` ,solicitud);
        const mensaje = await enviar.json();
        if(mensaje.statusCode===404){
            throw mensaje.message;
        }
        window.location.reload();
    }catch(err){
        alert(err);
        window.location.reload();
    }
}

export{
    borrarPregunta
}