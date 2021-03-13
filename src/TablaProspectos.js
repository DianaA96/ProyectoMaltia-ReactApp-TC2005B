import React from 'react';
import './TablaProspectos.css';
import CustomLink from './CustomLink';

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
                  <td data-th="botonEditar"><CustomLink tag='button' to='./editarProspecto' id="botonEditarProspecto">Editar</CustomLink></td>
                  <td data-th="botonContactar"><CustomLink tag='button' to='./contactarProspecto' id="botonContactarProspecto">Contactar</CustomLink></td>
                  <td data-th="botonIniciarSolicitud"><CustomLink tag='button' to='./solicitudCliente' id="botonIniciarSolicitudProspecto">Iniciar solicitud</CustomLink></td>
                  </tr>
                  ))}
              </table>
          </section>
     </section>
    );
  }
  
export default TablaProspectos;