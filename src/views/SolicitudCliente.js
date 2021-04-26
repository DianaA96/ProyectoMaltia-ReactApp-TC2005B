import React , {useState,useEffect} from 'react';
import './SolicitudCliente.css';
import '../components/Boton.css';
import '../components/plantillaInputs.css';
import Bienvenida from '../components/Bienvenida';
import Lateral from '../components/Lateral';
import Checkbox from '../components/Checkbox';
import DropMenu from '../components/DropMenu';
import asesor from '../assets/asesor.png';
import CustomLink from '../components/CustomLink';
import axios from 'axios';

function SolicitudCliente(props) {
    const [status, setStatus]= useState('idle');
    const [datos ,setDatos] = useState([]);
    const{
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        numTelefono,
        fechaNacimiento='',
        direccion='',
        firmaSolicitud=0,
        numeroClienteZorro=0,
        numIne=0,
        refName='',
        numTelefonoReferencia='',
    }=datos;



    useEffect(() =>{
        setStatus('loading')
        axios.get(`http://localhost:5000/prospects/${props.match.params.idProspect}`)
        .then((result) => {
            setStatus('resolved')
            setDatos(result.data.datosProspecto)
        })
        .catch((error) => {
            setStatus('error')
        })
    },[])

    //cambiar por el de diana
    if(status=== 'idle' || status === 'loading'){
       return<h1>loading...</h1>
    }

    //no c 
    if(status === 'error'){
        return<h1>oops</h1>
    }

        let fecha = new Date();
    let varFecha = `${fecha.getDate()} de ${fecha.toLocaleString('default', { month: 'long' })} del ${fecha.getFullYear()}`;
    let dropMenuType = {contenido: "Tipo de crédito*",}

    let tabs = ["Administrar prospectos", "Agregar prospectos", "Administrar Clientes"];

    if(status === 'resolved'){
        return(
            <main id='mainSolicitudCliente'>
                <aside>
                    <Lateral tabs = {tabs} img = {asesor} />
                </aside>
                <section className='contentPageExtendido'>
                    <header className='headerSolicitudCliente'>
                        <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Llenar la solicitud del cliente"/>
                        <h2 className="fechaLlenadoSolicitud">{varFecha}</h2>
                    </header>
                    <section className='datosClienteSolicitud'>
                        <div className='datosCliente'>
                            <p>{nombre} {apellidoPaterno} {apellidoMaterno}</p>
                            <p><i class="fas fa-phone-alt"></i>{numTelefono}</p>
                        </div>
                        <div className='checkSolicitud'>
                            <p>Solicitud firmada:</p>
                            <Checkbox />
                        </div>
                    </section>
                    <form>
                        <section className='inputsDatosCliente'>
                            <div className='grupoInput'>
                                <input type='text' className='inputFormularios w-2'  placeholder='Fecha de nacimiento*' onFocus={(e) => {e.currentTarget.type = 'date'}} required ></input>                            
                                <label htmlFor="name" className="etiquetaInputs">Fecha de nacimiento* (formato dd/mm/aaaa)</label>
                            </div>
                            <div className='grupoInput'>
                                <input type='text' className='inputFormularios w-2' name="Dirección*" placeholder='Dirección*' required></input>
                                <label htmlFor="name" className="etiquetaInputs">Dirección*(calle, número, ciudad, estado, código postal)</label>
                            </div>
                            <div className='grupoInput'>
                                <input type='number' className='inputFormularios w-2' name='No. de cliente Zorro Abarrotero*' placeholder='No. de cliente Zorro Abarrotero*' required></input>
                                <label htmlFor="name" className="etiquetaInputs">No. de cliente Zorro Abarrotero*</label>
                            </div>
                            <div className='grupoInput'>
                                <input type='number' className='inputFormularios w-2' name='INE*' placeholder='INE*' required></input>
                                <label htmlFor="name" className="etiquetaInputs">INE*(10 dígitos de la parte posterior)</label>
                            </div>
                            <div className='grupoInput'>
                                <input type='number' className='inputFormularios w-2' name='Monto solicitado*' placeholder='Monto solicitado*' required></input>
                                <label htmlFor="name" className="etiquetaInputs">Monto solicitado*(coloque sólo el valor numérico)</label>
                            </div>
                            <DropMenu {...dropMenuType}/>
                        </section>
                        <section className='inputsReferenciasCliente'>
                            <div className='tarjetaReferencia'>
                                <h1>Referencia 1:</h1>
                                <input type='text' className='input-gral' placeholder='Nombre'></input>
                                <input type='text' className='input-gral' placeholder='Teléfono'></input>
                            </div>
                            <div className='tarjetaReferencia'>
                                <h1>Referencia 2:</h1>
                                <input type='text' className='input-gral' placeholder='Nombre'></input>
                                <input type='text' className='input-gral' placeholder='Teléfono'></input>
                            </div>
                            <div className='tarjetaReferencia'>
                                <h1>Referencia 3:</h1>
                                <input type='text' className='input-gral' placeholder='Nombre'></input>
                                <input type='text' className='input-gral' placeholder='Teléfono'></input>
                            </div>
                        </section>
                        <section className='botonesEnviarSolicitud'>
                            <CustomLink tag='button' to='/administrarProspectos' className="botonAzulMarino">Cancelar</CustomLink>
                            <CustomLink tag='input' type='submit' className='botonSalmon' value='Enviar solicitud' to='./administrarProspectos'/>
                        </section>
                    </form>
                </section>
            </main>
        );
    }
}
export default SolicitudCliente;