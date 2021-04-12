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
                                    <td data-th={`\u000A ${registro.puesto}`}>{registro.nombres + " " + registro.apellidos}</td>
                                    <td>{registro.puesto}</td>
                                    <td><CustomLink tag='button' to='./editarUsuario' id="botonEditarUsuario"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></CustomLink></td>
                                    <td><CustomLink tag='button' to='./eliminarUsuario' id="botonEliminarUsuario"><i class="fas fa-user-slash"></i></CustomLink></td>
                              </tr>
                        </tbody>
                  ))}
                  </table>
            </section>
     </section>
    );
  }
  
export default TablaUsuarios;