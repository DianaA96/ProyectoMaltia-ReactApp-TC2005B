import './TablaUsuarios.css';

function TablaUsuarios() {
    return (
      <section id="contenedorTablaUsuarios">
         <div id="encabezadoTabla">
             <h5 id="encabezadoNombreUsuario">Nombre del usuario</h5>
             <h5 id="encabezadoRolUsuario">Rol</h5>
             <h5 id="encabezadoAccionesUsuario">Acciones</h5>
         </div>
          <section id='tablaUsuarios'>
                <table class="rwd-table">
                  <tr>
                        <td data-th="nombreUsuario">Harry José Potter Hernández</td>
                        <td data-th="rol">Asesor</td>
                        <td data-th="botonEditar"><button id="botonEditarUsuario">Editar</button></td>
                        <td data-th="botonEliminar"><button id="botonEliminarUsuario">Eliminar</button></td>
                  </tr>
                  <tr>
                        <td data-th="nombreUsuario">Harry José Potter Hernández</td>
                        <td data-th="rol">Asesor</td>
                        <td data-th="botonEditar"><button id="botonEditarUsuario">Editar</button></td>
                        <td data-th="botonEliminar"><button id="botonEliminarUsuario">Eliminar</button></td>
                  </tr>
                  <tr>
                        <td data-th="nombreUsuario">Harry José Potter Hernández</td>
                        <td data-th="rol">Asesor</td>
                        <td data-th="botonEditar"><button id="botonEditarUsuario">Editar</button></td>
                        <td data-th="botonEliminar"><button id="botonEliminarUsuario">Eliminar</button></td>
                  </tr>
                  <tr>
                        <td data-th="nombreUsuario">Harry José Potter Hernández</td>
                        <td data-th="rol">Asesor</td>
                        <td data-th="botonEditar"><button id="botonEditarUsuario">Editar</button></td>
                        <td data-th="botonEliminar"><button id="botonEliminarUsuario">Eliminar</button></td>
                  </tr>
                  <tr>
                        <td data-th="nombreUsuario">Harry José Potter Hernández</td>
                        <td data-th="rol">Analista</td>
                        <td data-th="botonEditar"><button id="botonEditarUsuario">Editar</button></td>
                        <td data-th="botonEliminar"><button id="botonEliminarUsuario">Eliminar</button></td>
                  </tr>
                  <tr>
                        <td data-th="nombreUsuario">Harry José Potter Hernández</td>
                        <td data-th="rol">Analista</td>
                        <td data-th="botonEditar"><button id="botonEditarUsuario">Editar</button></td>
                        <td data-th="botonEliminar"><button id="botonEliminarUsuario">Eliminar</button></td>
                 </tr>
                  <tr>
                        <td data-th="nombreUsuario">Harry José Potter Hernández</td>
                        <td data-th="rol">Asesor</td>
                        <td data-th="botonEditar"><button id="botonEditarUsuario">Editar</button></td>
                        <td data-th="botonEliminar"><button id="botonEliminarUsuario">Eliminar</button></td>
                 </tr>
             </table>
        </section>
     </section>
    );
  }
  
export default TablaUsuarios;