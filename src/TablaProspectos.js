import React from 'react';
import './TablaProspectos.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

function TablaProspectos(props) {
    return (
      <section className="contenedorTablaProspectos">
         <div className="encabezadoTabla">
             <h5 id="encabezadoNombreProspecto">Nombre del prospecto</h5>
             <h5 id="encabezadoAccionesProspecto">Acciones</h5>
         </div>
          <section className="tabla">
              <table className="rwd-table">
                  {props.data.map((registro, indice) => (
                  <tr>
                  <td data-th="nombreProspecto">{registro.nombres + " " + registro.apellidos}</td>
                  <td data-th="botonEditar"><button id="botonEditarProspecto"><Link to='./editarProspecto'>Editar</Link></button></td>
                  <td data-th="botonContactar"><button id="botonContactarProspecto"><Link to='./contactarProspecto'>Contactar</Link></button></td>
                  <td data-th="botonIniciarSolicitud"><button id="botonIniciarSolicitudProspecto"><Link to='./SolicitudCliente'>Iniciar solicitud</Link></button></td>
                  </tr>
                  ))}
              </table>
          </section>
     </section>
    );
  }
  
export default TablaProspectos;