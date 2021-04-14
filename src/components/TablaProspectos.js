import './TablaProspectos.css';
import CustomLink from './CustomLink';

function TablaProspectos(props) {
    return (
      <section className="contenedorTablaProspectos">
        <div className="encabezadoTablaProspectos">
            <h5 id="encabezadoNombreProspecto">Nombre del prospecto</h5>
            <h5 id="encabezadoAccionesProspecto">Acciones</h5>
        </div>
        <section className="tablaProspectos">
          <table className="prospectsTable">
            {props.data.map((registro, indice) => (
            <tbody>
              <tr key={indice}>
                <td>{registro.nombres + " " + registro.apellidos}</td>
                <td><CustomLink tag='button' to='./editarProspecto' id="botonEditarProspecto"><i class="fas fa-user-edit"></i></CustomLink></td>
                <td><CustomLink tag='button' to='./contactarProspecto' id="botonContactarProspecto"><i class="fas fa-phone"></i></CustomLink></td>
                <td><CustomLink tag='button' to='./solicitudCliente' id="botonIniciarSolicitudProspecto"><i class="fas fa-play"></i></CustomLink></td>
              </tr>
            </tbody>
            ))}
          </table>
        </section>
      </section>
    );
  }
  
export default TablaProspectos;