import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import React, { useState } from 'react';
import asesor from '../assets/asesor.png'
import './AgregarEditarUsuario.css';
import '../components/plantillaInputs.css';
import '../components/Boton.css';
import CustomLink from '../components/CustomLink';
import axios from 'axios';
import IdleStateView from '../components/IdleStateView';
import ErrorScreen from '../components/ErrorScreen';

// ESTA VISTA REQUIERE CONOCER EL ID DEL ASESOR QUE HA INICIADO SESIÓN
let idLoggedAssessor = 1

function Aprospecto(){

    let fecha = new Date();
    let varFecha = `${fecha.getDate()} de ${fecha.toLocaleString('default', { month: 'long' })} del ${fecha.getFullYear()}`;

    let tabs = ["Administrar prospectos", "Agregar prospectos","Administrar clientes"];

    const [ status, setStatus ] = useState('idle');
    const [ error, setError ] = useState(null);
    const [ prospect, setProspect ] = useState({});
    const [ statusForm, setStatusForm ] = useState('pristine');
    
    function handleChange(event) {
        let nuevaInfo = {
            ...prospect,
            idAssessor: idLoggedAssessor,
            [event.target.name]: event.target.value 
        }
        setProspect(nuevaInfo)
        setStatusForm('dirty')
    }

    function handleSave(event) {
        event.preventDefault()
        setStatusForm('loading')
        setError(null)
        console.log(prospect)
        
        axios({
            method: 'post',
            url: 'http://localhost:5000/prospects/',
            data: {
                body: {prospect},
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    }
                }
            }
        )
    }

    return(
        <main>
            <aside>
                <Lateral img = {asesor} usuario="Asesor #1234" tabs={tabs} />
            </aside>

            <div className='contentPageForms'>
                <header>
                    <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Agregar prospecto"/>
                    <p className='tag-fecha'>{varFecha}</p>
                </header>

                <form onSubmit={handleSave}>
                    <section className="inputsContentPage">
                        <input name="nombre" 
                        className = "input-gral w-3" 
                        type="text" 
                        placeholder="Nombre(s)"
                        onChange={handleChange}
                        />

                        <input 
                        name="apellidoPaterno" 
                        className = "input-gral w-3" 
                        type="text" 
                        placeholder="Apellido paterno"
                        onChange={handleChange}
                        />

                        <input 
                        name="apellidoMaterno" 
                        className = "input-gral w-3" 
                        type="text" 
                        placeholder="Apellido materno"
                        onChange={handleChange}
                        />

                        <input 
                        name="numTelefono" 
                        className = "input-gral w-2" 
                        type="number" 
                        placeholder="Teléfono"
                        onChange={handleChange}
                        />

                        <input 
                        name="correoElectronico" 
                        className = "input-gral w-2" 
                        type="email" 
                        placeholder="Correo electrónico"
                        onChange={handleChange}
                        />

                        <input 
                        name="idStore" 
                        className = "input-gral w-2" 
                        type="text" 
                        placeholder="RED"
                        onChange={handleChange}
                        />

                    </section>

                    <section className='botonesContentPage'>
                        <CustomLink tag='button' to='./administrarProspectos' className="botonAzulMarino">Cancelar</CustomLink>
                        <CustomLink onClick={handleSave} type="submit" tag='button' to='./solicitudCliente' className="botonSalmon mr">Continuar solicitud</CustomLink>
                        <CustomLink onClick={handleSave} type="submit" tag='button' to='./administrarProspectos' className="botonSalmon mr">Registrar</CustomLink>
                    </section>
                </form>

            </div>
        </main>
    );
}

export default Aprospecto;