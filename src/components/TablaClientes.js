import React, {useState, useEffect}  from 'react';
import './TablaClientes.css';
import CustomLink from './CustomLink';
import axios from 'axios'


function TablaClientes(props) {

	const [status, setStatus ] = useState('idle');
	const [error, setError] = useState(null);
	const [applications, setApplications] = useState([]);
    
	useEffect(()=>{
	setStatus('loading')
	axios.get(`http://localhost:5000/prospects/clients?thisEmployee=15`) //Cómo pasar el id del Asesor que inició sesión
			.then((result)=>{
				let [[{result.data.solicitudes}]] = [[{dest1}]];
				setApplications()

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
				<React.Fragment>
					<section className="contenedorTablaClientes">
							<div className="encabezadoTablaClientes">
								<h5 id="encabezadoNombreCliente">Nombre del cliente</h5>
								<h5 id="encabezadoEstatusCliente"></h5>
								<h5 id="encabezadoAccionesCliente">Acciones</h5>
							</div>
					</section>
					<section className="tablaClientes">
							<table className="clientsTable">         
							{applications.map((registro, indice)=>(
								<tbody>
										<tr key={indice}>
											<td>{registro.nombre+ " " + registro.apellidoPaterno + " " + registro.apellidoMaterno + registro.estatus}</td>
											<td><p id={"semaforoEstatus" + registro.estatus}></p></td>
											<td><CustomLink tag='button' to='./seguimientoCliente1' id="botonSeguimiento"><i class="fas fa-tasks"></i></CustomLink></td>
										</tr>
								</tbody>
							))}
							</table>
					</section> 
				</React.Fragment>
		);
	}
} 
export default TablaClientes;