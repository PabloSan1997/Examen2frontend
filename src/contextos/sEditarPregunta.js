async function editarPregunta(id1,pregun){
    try {
        const solicitud = {
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(pregun)
        }
        const enviar = await fetch(`http://localhost:3005/api/v1/preguntas/${id1}/pregunta`, solicitud);
        const mensaje = await enviar.json();
        window.location.reload();
    } catch (error) {
        alert(error);
    }
}

export{editarPregunta}