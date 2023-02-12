
async function agregarPregunta(pregun){
    try {
        const solicitud = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(pregun)
        }
        const enviar = await fetch('http://localhost:3005/api/v1/preguntas/', solicitud);
        const mensaje = await enviar.json();
        console.log(mensaje);
        window.location.reload();
    } catch (error) {
        alert(error);
    }
}

export{agregarPregunta}