import './TablaProspectos.css';
import CustomLink from './CustomLink';
import axios from 'axios'
import React,{useState, useEffect} from 'react';
import IdleStateView from './IdleStateView';
import ErrorScreen from './ErrorScreen';

function TablaProspectos(props) {

  function showModal(){
     props.setStatus('visible')
    }
  
  const [status, setStatus ] = useState('idle');
  const [error, setError] = useState(null);
  const [prospects, setProspects] = useState([]);

  useEffect(()=>{
    setStatus('loading')
    axios.get(`http://localhost:5000/prospects?thisAssessor=1`) //Cómo pasar el id del Asesor que inició sesión
          .then((result)=>{
              setProspects(result.data.prospectos)
              setStatus('resolved')
          })
          .catch((error)=>{
              setError(error)
              setStatus('error')
          })
  }, [])

  if(status === 'idle' || status === 'loading'){
      return (
      <IdleStateView></IdleStateView>
      )
  }


  if(status === 'error'){
      return (
        <ErrorScreen mensaje = {error.message} respuesta={error.name}/>
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
              {prospects.map((registro, indice) => (
              <tbody>
                <tr key={indice}>
                  <td>{registro.nombre + " " + registro.apellidoPaterno+ " " + registro.apellidoMaterno}</td>
                  <td><CustomLink tag='button' to={`./editarProspecto/${registro.idProspect}`} id="botonEditarProspecto"><i class="fas fa-user-edit"></i></CustomLink></td>
                  <td><button onClick={showModal} tag='button' id="botonContactarProspecto"><i class="fas fa-phone"></i></button></td>
                  <td><CustomLink tag='button' to={`./solicitudCliente/${registro.idProspect}`} id="botonIniciarSolicitudProspecto"><i class="fas fa-play"></i></CustomLink></td>
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