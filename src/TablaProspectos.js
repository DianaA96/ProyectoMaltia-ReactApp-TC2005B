import React from 'react';
import './TablaProspectos.css';

function TablaProspectos(props) {
    return (
      <section className="contenedorTabla">
         <div className="encabezadoTabla">
             <h5 id="encabezadoNombreProspecto">Nombre del prospecto</h5>
             <h5 id="encabezadoAccionesProspecto">Acciones</h5>
         </div>
          <section className="tabla">
                  <table className="rwd-table">
                        {props.data.map((registro, indice) => (
                        <tr>
                        <td data-th="nombreProspecto">{registro.nombres + " " + registro.apellidos}</td>
                        <td data-th="botonEditar"><button id="botonEditarProspecto">Editar</button></td>
                        <td data-th="botonContactar"><button id="botonContactarProspecto">Contactar</button></td>
                        <td data-th="botonIniciarSolicitud"><button id="botonIniciarSolicitudProspecto">Iniciar solicitud</button></td>
                        </tr>
                        ))}
                  </table>
        </section>
     </section>
    );
  }
  
export default TablaProspectos;