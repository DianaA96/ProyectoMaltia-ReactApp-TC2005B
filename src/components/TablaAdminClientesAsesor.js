import React from 'react';
import './TablaAdminClientesAsesor.css';
import './Boton.css';
import CustomLink from './CustomLink';

function TablaAdminClientesAsesor(props) {
    return (
          <React.Fragment>
            <section className="contenedorTablaClientesAsesor">
                  <div className="encabezadoTablaClientesAsesor">
                        <h5 id="encabezadoNombreClientesAsesor">Nombre del cliente</h5>
                        <h5 id="encabezadoAccionesClientesAsesor">Acciones</h5>
                        <h5 id="encabezadoEstatusClientesAsesor">Estatus</h5>
                  </div>
            </section>
            <section className="tablaClientesAsesor">
                  <table className="clientsTable2">         
                  {props.data.map((registro, indice)=>(
                       <tbody>
                              <tr key={indice}>
                                    <td colSpan="1">{registro.nombres+ " " + registro.apellidos}</td>
                                    <td><CustomLink tag='button' to='./editarSolicitudCliente' id="botonEditarProspecto"><i class="fas fa-user-edit"></i></CustomLink></td>
                                    <td><p id={"semaforoEstatus" + registro.estatusCliente}> </p></td>
                              </tr>
                        </tbody>
                   ))}
                  </table>
            </section> 
      </React.Fragment>
    );
  }
  
export default TablaAdminClientesAsesor;