import React from 'react';
import './TablaClientes.css';

function TablaClientes(props) {
    return (
          <React.Fragment>
            <section className="contenedorTabla">
                  <div className="encabezadoTabla">
                        <h5 id="encabezadoNombreCliente">Nombre del cliente</h5>
                        <h5 id="encabezadoEstatusCliente"></h5>
                        <h5 id="encabezadoAccionesCliente">Acciones</h5>
                  </div>
            </section>
            <section className="tabla">
                  <table className="rwd-table">         
                  {props.data.map((registro, indice)=>(
                        <tr>
                              <td data-th="nombreCliente">{registro.nombres+ " " + registro.apellidos}</td>
                              <td data-th="estatusCliente"><p id={"semaforoEstatus" + registro.estatusCliente}> </p></td>
                              <td data-th="botonSeguimiento"><button id="botonSeguimiento">Seguimiento</button></td>
                        </tr>
                   ))}
                  </table>
                  
            </section> 
            <div className='semaforoInfo'>
                  <p className="verde">Credito pendiente<p className="semaforo"></p></p> <p className="rojo">Credito dispuesto <p className="semaforor"></p></p>
            </div>
      </React.Fragment>
    );
  }
  
export default TablaClientes;