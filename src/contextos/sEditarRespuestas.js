async function editarRespuesta(id1, id2, cuerpo){
    try{
        const solicitud = {
            method:"PATCH",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(cuerpo)
        }
        const enviar = await fetch(`http://localhost:3005/api/v1/preguntas/${id1}/respuesta/${id2}` ,solicitud);
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
export{editarRespuesta}