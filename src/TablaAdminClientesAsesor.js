import React from 'react';
import './TablaAdminClientesAsesor.css';
import './Boton.css';

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
                  <table className="rwd-table">         
                  {props.data.map((registro, indice)=>(
                        <tr>
                              <td data-th="nombreClientesAsesor" colSpan="1">{registro.nombres+ " " + registro.apellidos}</td>
                              <td data-th="botonEditarClientesAsesor"><button id="botonEditarClienteAsesor">Editar</button></td>
                              <td data-th="estatusClientesAsesor"><p id={"semaforoEstatus" + registro.estatusCliente}> </p></td>
                        </tr>
                   ))}
                  </table>
                  
            </section> 
            <div className='semaforoInfoClientesAsesor'>
                  <p className="verde">Crédito autorizado <p className="semaforo"></p></p> 
            </div>
      </React.Fragment>
    );
  }
  
export default TablaAdminClientesAsesor;