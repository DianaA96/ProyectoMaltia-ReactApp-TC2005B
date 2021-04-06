import React from 'react';
import './TablaClientes.css';
import CustomLink from './CustomLink';

function TablaClientes(props) {
    return (
          <React.Fragment>
            <section className="contenedorTablaClientes">
                  <div className="encabezadoTablaClientes">
                        <h5 id="encabezadoNombreCliente">Nombre del cliente</h5>
                        <h5 id="encabezadoEstatusCliente"></h5>
                        <h5 id="encabezadoAccionesCliente">Acciones</h5>
                  </div>
            </section>
            <section className="tablaClientes">
                  <table className="clientsTable">         
                  {props.data.map((registro, indice)=>(
                        <tbody>
                              <tr key={indice}>
                                    <td>{registro.nombres+ " " + registro.apellidos}</td>
                                    <td><p id={"semaforoEstatus" + registro.estatusCliente}></p></td>
                                    <td><CustomLink tag='button' to='./seguimientoCliente1' id="botonSeguimiento">Seguimiento</CustomLink></td>
                              </tr>
                        </tbody>
                   ))}
                  </table>
            </section> 
      </React.Fragment>
    );
  }
  
export default TablaClientes;