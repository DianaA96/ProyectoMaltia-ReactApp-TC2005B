import './TablaProspectos.css';
import CustomLink from './CustomLink';
import axios from 'axios'
import React, {useState, useEffect} from 'react';
import IdleStateView from './IdleStateView';
import ErrorScreen from './ErrorScreen';

function TablaProspectos(props) {

  function showModal(event){
     props.setVisibility('visible')
     props.setUserId(event.target.name)
     console.log(props.userId)
     console.dir(event)
  }

  const [ status, setStatus ] = useState('idle');
  const [ error, setError ] = useState(null);
  const [ prospects, setProspects ] = useState([]);

  useEffect(()=>{
    setStatus('loading')
    axios.get(`http://localhost:5000/prospects?thisAssessor=1&name=${props.queryInput}`) 
          .then((result)=>{
            setProspects(result.data.prospectos)
            setStatus('resolved')
          })
          .catch((error)=>{
              setError(error)
              setStatus('error')
          })
  }, [props.queryInput])

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

              {prospects.length > 0 && prospects.map((registro, indice) => (

              <tbody>
                <tr key={registro.idProspect}>
                  <td>{registro.nombre + " " + registro.apellidoPaterno+ " " + registro.apellidoMaterno}</td>
                  <td><CustomLink tag='button' to={`./editarProspecto/${registro.idProspect}`} id="botonEditarProspecto"><i className="fas fa-user-edit"></i></CustomLink></td>
                  <td><button name={registro.idProspect} onClick={showModal} tag='button' id="botonContactarProspecto"><i className="fas fa-phone"></i></button></td>
                  <td><CustomLink tag='button' to={`/solicitudCliente/${registro.idProspect}`} id="botonIniciarSolicitudProspecto"><i className="fas fa-play"></i></CustomLink></td>
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