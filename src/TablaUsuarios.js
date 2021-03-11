import './TablaUsuarios.css';

import {
      BrowserRouter as Router,
      Route,
      Link,
      Switch,
    } from 'react-router-dom';

function TablaUsuarios(props) {
    return (
      <section className="contenedorTabla">
         <div className="encabezadoTabla">
             <h5 id="encabezadoNombreUsuario">Nombre del usuario</h5>
             <h5 id="encabezadoRolUsuario">Rol</h5>
             <h5 id="encabezadoAccionesUsuario">Acciones</h5>
         </div>
          <section className="tabla">
                  <table className="rwd-table">
                        {props.data.map((registro, indice) => (
                              <tr>
                              <td data-th="nombreUsuario">{registro.nombres + " " + registro.apellidos}</td>
                              <td data-th="rol">{registro.puesto}</td>
                              <td data-th="botonEditar"><button id="botonEditarUsuario"><Link to='./EditarUsuario'>Editar</Link></button></td>
                              <td data-th="botonEliminar"><button id="botonEliminarUsuario">Eliminar</button></td>
                              </tr>
                        ))}
                  </table>
        </section>
     </section>
    );
  }
  
export default TablaUsuarios;