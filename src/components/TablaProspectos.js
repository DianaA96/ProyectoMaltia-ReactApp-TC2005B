import './TablaProspectos.css';
import CustomLink from './CustomLink';
// Importamos la librería axios para poder hacerle peticiones
// a la API sin necesidad de traducir json
import axios from 'axios'

// Ponemos disponibles desde React los hooks
// useState y useEffect
import React, {useState, useEffect} from 'react';
import IdleStateView from './IdleStateView';
import ErrorScreen from './ErrorScreen';

function TablaProspectos(props) {

  function showModal(){
     props.setStatus('visible')
  }

  const [ status, setStatus ] = useState('idle');
  const [ error, setError ] = useState(null);

  // En la constante de estado que almacenará a la colección
  // de objetos que se obtendrá del API, declaramos un arreglo
  // vacío para poder almacenarlos. Se tiene que declarar
  // dentro del arreglo el nombre de la variable que almacenará
  // y el método setVariable.
  const [prospects, setProspects] = useState([]);

  // Use Effect requiere de un callback. Se manda a llamar
  // dentro de la función del componente y lo que se obtiene
  // a partir de la llamada al API que realiza se guarda en
  // el estado de React.
  useEffect(()=>{
    setStatus('loading')
    // Petición del API (puede ir seguida de then/catch o async/await y try/catch)
    axios.get(`http://localhost:5000/prospects?thisAssessor=1`) //Cómo pasar el id del Asesor que inició sesión
          .then((result)=>{
            // le pasamos a setVariable la colección de datos que llega del API
            setProspects(result.data.prospectos)
            setStatus('resolved')
          })
          .catch((error)=>{
              setError(error)
              setStatus('error')
          })
  // Se usa un arreglo vacío al final para denotar que el componente
  // sólo se renderea la primera vez que se carga el componente
  }, [])

  if(status === 'idle' || status === 'loading'){
    return <IdleStateView/>
  }


  if(status === 'error'){
    return (
      <ErrorScreen mensaje = {error.message}/>
    )
  }

  if(status === 'resolved'){
    return (
        <section className="contenedorTablaProspectos">
          <div className="encabezadoTablaProspectos">
              <h5 id="encabezadoNombreProspecto">Nombre del prospecto</h5>
              <h5 id="encabezadoAccionesProspecto">Acciones</h5>
          </div>
          <section className="tablaProspectos">
            <table className="prospectsTable">
              {prospects.length > 0 && prospects.map((registro) => (
              <tbody>
                <tr key={registro.idProspect}>
                  <td>{registro.nombre + " " + registro.apellidoPaterno+ " " + registro.apellidoMaterno}</td>
                  <td><CustomLink tag='button' to={`./editarProspecto/${registro.idProspect}`} id="botonEditarProspecto"><i class="fas fa-user-edit"></i></CustomLink></td>
                  <td><button onClick={showModal} tag='button' id="botonContactarProspecto"><i class="fas fa-phone"></i></button></td>
                  <td><CustomLink tag='button' to='./solicitudCliente' id="botonIniciarSolicitudProspecto"><i class="fas fa-play"></i></CustomLink></td>
                </tr>
              </tbody>
              ))}
            </table>
          </section>
        </section>
      );
  }
}
export default TablaProspectos;