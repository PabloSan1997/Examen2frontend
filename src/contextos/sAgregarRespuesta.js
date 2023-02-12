
async function agregarRespuesta(id1){
    try {
        const solicitud = {
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                respuesta:`Respuesta ${id1}`
            })
        }
        const enviar = await fetch(`http://localhost:3005/api/v1/preguntas/${id1}`, solicitud);
        const mensaje = await enviar.json();
        window.location.reload();
    } catch (error) {
        alert(error);
    }
} 

export{agregarRespuesta}