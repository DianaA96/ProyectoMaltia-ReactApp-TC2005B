import React, {useState, useEffect} from 'react';
import './TablaAdminClientesAsesor.css';
import './Boton.css';
import CustomLink from './CustomLink';
import IdleStateView from './IdleStateView';
import ErrorScreen from './ErrorScreen';
import axios from 'axios';

function TablaAdminClientesAsesor() {
         const [status, setStatus ] = useState('idle');
         const [error, setError] = useState(null);
         const [applications, setApplications] = useState([]);
         
         useEffect(()=>{
           setStatus('loading')
           axios.get(`http://localhost:5000/prospects/clients?thisEmployee=15`) //Cómo pasar el id del Asesor que inició sesión
                 .then((result)=>{
                     setApplications(result.data.solicitudes)
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
          <React.Fragment>
            <section className="contenedorTablaClientesAsesor">
                  <div className="encabezadoTablaClientesAsesor">
                        <h5 id="encabezadoNombreClientesAsesor">Nombre del cliente</h5>
                        <h5 id="encabezadoAccionesClientesAsesor">Acciones</h5>
                        <h5 id="encabezadoEstatusClientesAsesor">Estatus</h5>
                  </div>
            </section>
            <section className="tablaClientesAsesor">
                  <table className="clientsTable2">         
                  {applications.map((registro, indice)=>(
                       <tbody>
                              <tr key={indice}>
                                    <td colSpan="1">{registro.nombre+ " " + registro.apellidoPaterno + " " + registro.apellidoMaterno}</td>
                                    <td><CustomLink tag='button' to={`./editarSolicitudCliente/${registro.idApplication}`} id="botonEditarProspecto"><i class="fas fa-user-edit"></i></CustomLink></td>
                                    <td><p id={"semaforoEstatus" + registro.estatusCliente}> </p></td>
                              </tr>
                        </tbody>
                  ))}
                  </table>
            </section> 
      </React.Fragment>
    );
  }
} 
export default TablaAdminClientesAsesor;