import React from "react";
import { Contexto } from "../contextos";
import './index.css'
function Contenedor() {
  const { datos, cargar, error } = React.useContext(Contexto);
  return (
    <div className="contenedor">
      {cargar === 0 && <p className="mensaje">Cargando...</p>}
      {cargar === 2 && <p className="mensaje">{datos}</p>}
      {error && <p className="mensaje">Problemas para conectar con el servidor</p>}
      {cargar === 1 &&
        datos.map((ele) => (
          <Preguntas
            key={ele.id}
            num={ele.id}
            pregunta={ele.pregunta}
            respuestas={ele.respuestas}
          />
        ))}
    </div>
  );
}
function Preguntas({ pregunta, respuestas, num }) {
  const [ver, setVer] = React.useState(true);
  const [texto, setTexto] = React.useState(pregunta);
  const { agregarRespuesta, borrarPregunta, borrarRespuesta, editarRespuesta ,editarPregunta } =
    React.useContext(Contexto);
  return (
    <div className="fila">
      <div className="pregunta">
        {ver ? (
          <p className="texto">
            {num}.- {pregunta}
          </p>
        ) : (
          <input
            className="entrada"
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
          />
        )}
        <div className="area-boton">
          {ver ? (
            <React.Fragment>
              <button className="boton" onClick={() => setVer(false)}>
                editar
              </button>
              <button className="boton" onClick={() => agregarRespuesta(num)}>
                +
              </button>
              <button className="boton" onClick={() => borrarPregunta(num)}>
                X
              </button>
            </React.Fragment>
          ) : (
            <button className="boton" onClick={()=>{editarPregunta(num,{pregunta:texto})}}>Aceptar</button>
          )}
        </div>
      </div>
      <div className="area-respuesta">
        {respuestas.map((ele) => (
          <Respuestas
            key={ele.id}
            respuesta={ele.respuesta}
            estadoR={ele.estado}
            onBorrar={borrarRespuesta}
            numPreg={num}
            numRes={ele.id}
            onEditar={editarRespuesta}
          />
        ))}
      </div>
    </div>
  );
}
function Respuestas({
  respuesta,
  onBorrar,
  numPreg,
  numRes,
  onEditar,
  estadoR
}) {
  const [texto, setTexto] = React.useState(respuesta);
  const [mostrar, setMostrar] = React.useState(true);
  return (
    <div className={!estadoR ? "respuesta" : "respuesta rojo"}>
      {mostrar ? (
        <p className="texto">-{respuesta}</p>
      ) : (
        <input
          className="entrada"
          onChange={(e) => setTexto(e.target.value)}
          value={texto}
        />
      )}
      <div className="area-boton">
        {mostrar ? (
          <React.Fragment>
            <button className="boton bot" onClick={() => setMostrar(false)}>
              editar
            </button>
            <button className="boton bot" onClick={()=>onEditar(numPreg, numRes, {estado:!estadoR})}>
              {estadoR?'Bien':'Mal'}
              </button>
            <button className="boton uno" onClick={() => onBorrar(numPreg, numRes)}>
              X
            </button>
          </React.Fragment>
        ) : (
          <button
            className="boton aceptar"
            onClick={() => onEditar(numPreg, numRes, { respuesta: texto })}
          >
            Aceptar
          </button>
        )}
      </div>
    </div>
  );
}

export { Contenedor };
