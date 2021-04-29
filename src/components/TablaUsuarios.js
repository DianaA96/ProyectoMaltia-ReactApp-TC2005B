import './TablaUsuarios.css';
import CustomLink from './CustomLink';
import axios from 'axios'
import React,{useState, useEffect} from 'react';
import IdleStateView from './IdleStateView';
import ErrorScreen from './ErrorScreen';

function TablaUsuarios(props) {
  
  function showModal(event){
    props.setStatus('visible')
    props.setModalData(event.target.name)
  }
  
  const [status, setStatus ] = useState('idle');
  const [error, setError] = useState(null);
  const [employees, setEmployees] = useState([]);

  let queryString = ''

  if (props.queryInput !== '') {
    console.log(queryString)
    queryString = '?name=';
  }

  useEffect(()=>{
    setStatus('loading')
    axios.get(`http://localhost:5000/employees${queryString}${props.queryInput}`)
      .then((result)=>{
        setEmployees(result.data.empleados)
        setStatus('resolved')
      })
      .catch((error)=>{
        setError(error)
        setStatus('error')
      })
}, [props.queryInput])

if(status === 'idle' || status === 'loading'){
    return <IdleStateView></IdleStateView>
}


if(status === 'error'){
    return (
        <ErrorScreen mensaje = {error.message} respuesta={error.name}/>
    )
}

if(status === 'resolved'){

  return (
    <section className="contenedorTablaUsuarios">
      <div className="encabezadoTablaUsuarios">
        <h5 id="encabezadoNombreUsuario">Nombre del usuario</h5>
        <h5 id="encabezadoRolUsuario">Rol</h5>
        <h5 id="encabezadoAccionesUsuario">Acciones</h5>
      </div>
    <section className="tablaUsuarios">
      <table className="userTable">
      {employees.map((registro) => (
        <tbody>
          <tr key={registro.idEmployee}>
            <td data-th={`\u000A ${registro.puesto}`}>{registro.nombre + " " + registro.apellidoPaterno + " " + registro.apellidoMaterno}</td>
            <td>{registro.puesto}</td>
            <td><CustomLink tag='button' to={`/editarUsuario/${registro.idEmployee}/${registro.puesto}`} id="botonEditarUsuario"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></CustomLink></td>
            <td><button name = {registro.idEmployee} onClick={showModal} tag='button' id="botonEliminarUsuario"><i class="fas fa-user-slash"></i></button></td>
           
          </tr>
        </tbody>
      ))}
      </table>
    </section>
  </section>
  );
  }
}
  
export default TablaUsuarios;