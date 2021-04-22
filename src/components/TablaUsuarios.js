import './TablaUsuarios.css';
import CustomLink from './CustomLink';
import axios from 'axios'
import React,{useState, useEffect} from 'react';

function TablaUsuarios(props) {

      function showModal(){
            props.setStatus('visible')
      }

      const [status, setStatus ] = useState('idle');
      const [error, setError] = useState(null);
      const [employees, setEmployees] = useState([]);

      useEffect(()=>{
            setStatus('loading')
            axios.get('http://localhost:5000/employees')
                .then((result)=>{
                    setEmployees(result.data.empleados)
                    setStatus('resolved')
                })
                .catch((error)=>{
                    setError(error)
                    setStatus('error')
                })
        }, [])

        if(status === 'idle' || status === 'loading'){
            return <h1>Cargando...</h1>
        }


        if(status === 'error'){
            return (
                <div role="alert">
                    <p>There was an error: </p>
                    <pre>{error.message}</pre>
                </div>
                
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
                              {employees.map((registro, indice) => (
                                    <tbody>
                                          <tr key={indice}>
                                                <td data-th={`\u000A ${registro.puesto}`}>{registro.nombre + " " + registro.apellidoPaterno + " " + registro.apellidoMaterno}</td>
                                                <td>{registro.puesto}</td>
                                                <td><CustomLink tag='button' to='./editarUsuario' id="botonEditarUsuario"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></CustomLink></td>
                                                <td><button onClick={showModal} tag='button' id="botonEliminarUsuario"><i class="fas fa-user-slash"></i></button></td>
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