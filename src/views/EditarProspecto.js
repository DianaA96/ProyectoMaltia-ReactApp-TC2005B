import Lateral from'../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import React, { useState, useEffect } from 'react';
import asesor from '../assets/asesor.png'
import './AgregarEditarUsuario.css';
import '../components/plantillaInputs.css';
import '../components/Boton.css';
import CustomLink from '../components/CustomLink';
import axios from 'axios';
import IdleStateView from '../components/IdleStateView';
import ErrorScreen from '../components/ErrorScreen';

// ESTA VISTA REQUIERE CONOCER EL ID DEL ASESOR QUE HA INICIADO SESIÓN
const idLoggedAssessor = '#1234'

function Eprospecto(props) {

    let tabs = ["Administrar prospectos", "Agregar prospectos","Administrar clientes"];

    // Se inician los pedazos de estado del componente que nos ayudan a controlar su ciclo de vida
    const [ status, setStatus ] = useState('idle');
    const [ error, setError ] = useState(null);
    const [ prospect, setProspect ] = useState({});
    const [ statusForm, setStatusForm ] = useState('pristine');
    const [ errorForm, setErrorForm ] = useState(null);


    // Se hace la petición al API de los datos del usuario específico que se va a editar para prellenar el formulario
    useEffect( () => {
        setStatus('loading')
        axios.get(`http://localhost:5000/prospects/${props.match.params.idProspect}`)
            .then((result)=>{
                setProspect(result.data.datosProspecto)
                setStatus('resolved')
            })
            .catch((error)=>{
                setError(error)
                setStatus('error')
            })
        },
    [])

    let {
        idProspect,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        correoElectronico,
        numTelefono
    } = prospect

    //Función que se hace cargo del evento onChange ,que se lanza al hacer cambios en el input
    function handleChange(event) {
        // Se mezcla la información que ha cambiado en el formulario 
        // con la que ya existía anteriormente en prospect (que llegó desde el GET previo)
        let nuevaInfo = {
            ...prospect,
            [event.target.name]: event.target.value // Bracket notation para asignar valores inválidos a una variable
        }
        console.log(nuevaInfo)
        // Se reasigna de nuevo la información en prospect y se cambia su estado
        setProspect(nuevaInfo)
        // Se cambia el estado del formulario, ahora que se han hecho cambios en su interior
        setStatusForm('dirty')
    }

    // Función que se hace cargo del evento onSave, que se lanza al enviar el formulario
    function handleSave(event) {
        // Evitamos que se refresque la página al dar clic en el botón submit
        event.preventDefault()
        setStatusForm('loading')
        setErrorForm(null)
        console.log(prospect)

        axios.patch(`http://localhost:5000/prospects/${idProspect}`, {
            body: {...prospect},
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((result) => {
            setProspect(...result.data.prospectoActualizado)
            setStatusForm('pristine')
        })
        .catch(err => {
            setErrorForm(err);
            setStatusForm('error')
        })
    }

    return(
        <main>

            <aside>
                <Lateral img = {asesor} usuario={`Asesor ${idLoggedAssessor}`} tabs={tabs} />
            </aside>

            <div className='contentPageForms'>
                <header>
                    <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Editar Prospecto"/>
                </header>
                
                {(status === 'idle' || status === 'loading' || statusForm === 'loading') ? <IdleStateView/> : (status === 'error') ? <ErrorScreen mensaje = {error.message}/> :
                <form onSubmit={handleSave}>

                    <section className='inputsContentPage'>
                        <input 
                            name= "nombre" 
                            className= "input-gral w-3" 
                            type="text" 
                            placeholder="Nombre(s)"  
                            value={nombre} 
                            onChange={handleChange}
                        />

                        <input 
                            name= "apellidoPaterno" 
                            className= "input-gral w-3" 
                            type="text" 
                            placeholder="Apellido Paterno" 
                            value={apellidoPaterno} 
                            onChange={handleChange}
                        />

                        <input 
                            name= "apellidoMaterno" 
                            className= "input-gral w-3" 
                            type="text" 
                            placeholder="Apellido Materno" 
                            value={apellidoMaterno} 
                            onChange={handleChange}
                        />

                        <input 
                            name= "numTelefono" 
                            className= "input-gral w-2" 
                            type="number" 
                            placeholder="Teléfono" 
                            value={numTelefono} 
                            onChange={handleChange}
                        />

                        <input 
                            name= "correoElectronico" 
                            className= "input-gral w-2" 
                            type="email" 
                            placeholder="Correo Electrónico" 
                            value={correoElectronico} 
                            onChange={handleChange}
                        />
                    </section>

                    <section className="botonesContentPage">
                        <CustomLink 
                            tag='button' 
                            to='/administrarProspectos' 
                            className="botonAzulMarino">Cancelar</CustomLink>

                        <CustomLink 
                            tag='button' 
                            className="botonSalmon" 
                            disabled={statusForm === 'pristine'} 
                            type="submit">Guardar cambios</CustomLink>
                    </section>

                </form>}
                
            </div>
        </main>
    );
}

export default Eprospecto;