import './TablaUsuarios.css';
import CustomLink from './CustomLink';

function TablaUsuarios(props) {
    return (
      <section className="contenedorTablaUsuarios">
            <div className="encabezadoTablaUsuarios">
                  <h5 id="encabezadoNombreUsuario">Nombre del usuario</h5>
                  <h5 id="encabezadoRolUsuario">Rol</h5>
                  <h5 id="encabezadoAccionesUsuario">Acciones</h5>
            </div>
            <section className="tablaUsuarios">
                  <table className="userTable">
                  {props.data.map((registro, indice) => (
                        <tbody>
                              <tr key={indice}>
                                    <td>{registro.nombres + " " + registro.apellidos}</td>
                                    <td>{registro.puesto}</td>
                                    <td><CustomLink tag='button' to='./editarUsuario' id="botonEditarUsuario">Editar</CustomLink></td>
                                    <td><CustomLink tag='button' to='./eliminarUsuario' id="botonEliminarUsuario">Eliminar</CustomLink></td>
                              </tr>
                        </tbody>
                  ))}
                  </table>
            </section>
     </section>
    );
  }
  
export default TablaUsuarios;