import React, {useState, useEffect} from 'react';
import './SolicitudCliente.css';
import '../components/Boton.css';
import zorrito from '../assets/zorrito.gif';
import '../components/plantillaInputs.css';
import Bienvenida from '../components/Bienvenida';
import Lateral from '../components/Lateral';
import Checkbox from '../components/Checkbox';
import asesor from '../assets/asesor.png';
import CustomLink from '../components/CustomLink';
import Select from 'react-select';
import axios from 'axios';

function EditarSolicitudCliente(props) {
    const [status, setStatus]= useState('idle');
    const [datos , setDatos] = useState({});
    const [error, setError] = useState(null);
    const [SelectValue, setSelectValue] = useState([]);
    const [fullApplication, setFullApplication] = useState({});
    const [isCheck, setIsCheck] = useState(false);
    const idAssessor= "1"

    const customSelectStyles = {
        control: (base, state) => ({
            ...base,
            background: "#CACACA",
            borderRadius: "50px" ,
            boxShadow: state.isFocused ? null : null,
            padding: "7px 30px",
            fontSize: "1.2vw",
            fontFamily: "Raleway",
            fontWeight: "600",
            marginTop: "1em",
            "@media only screen and (max-width: 576px)": {
                ...base["@media only screen and (max-width: 576px)"],
                background:"#F2F5FA",
            },
          }),
          menu: base => ({
            ...base,
            borderRadius: "25px",
            fontSize: "1.2vw",
            fontFamily: "Raleway",
            
          }),
          menuList: base => ({
            ...base,
            padding: 0,
            borderRadius: "25px",
          }),
          dropdownIndicator: base => ({
            ...base,
            color: "#0f123f"
          }),
          container: base => ({
            ...base,
            width:"46%",
            "@media only screen and (max-width: 576px)": {
                ...base["@media only screen and (max-width: 576px)"],
                width:"90%",
            },
          })
    }
    const tiposCredito = [
        {value: 'simple' , label: 'Simple'},
        {value: 'revolvente' , label: 'Revolvente'}
    ]

    const handleSelectChange = selectedOption => {
        setSelectValue(selectedOption);
    }

    useEffect(() =>{
        setStatus('loading')
        axios.get(`http://localhost:5000/applications/full-application-data/${props.match.params.idProspect}`)
        .then((result) => {
            setStatus('resolved')
            setDatos(result.data.infoSolicitud)
            console.log(datos)
        })
        .catch((error) => {
            setStatus('error')
        })
    },[])
    const{
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        numTelefono,    
        fechaNacimiento,    
        creditoSolicitado,
        numIne, 
        direccion,
        numClienteZorro,
        montoSolicitado
    }=datos[0]; 


    let fecha = new Date();
    let mes = fecha.toLocaleString('default', { month: 'long' });
    let tabs = ["Administrar prospectos", "Agregar prospectos", "Administrar Clientes"];
    
    
    return(
        <main id='mainSolicitudCliente'>
            <aside>
                <Lateral tabs = {tabs} img = {asesor} />
            </aside>
            <section className='contentPageExtendido'>
                <header className='headerSolicitudCliente'>
                    <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Editar la solicitud del cliente"/>
                    <h2 className="fechaLlenadoSolicitud">{`${fecha.getDate()} de ${mes} del ${fecha.getFullYear()}`}</h2>
                </header>
                <section className='datosClienteSolicitud'>
                    <div className='datosCliente'>
                        <h1>{nombre} {apellidoPaterno} {apellidoMaterno}</h1>
                        <h1><i class="fas fa-phone-alt"></i> &nbsp; {numTelefono}</h1>
                    </div>
                    <div className='checkSolicitud'>
                        <h3>Solicitud firmada:</h3>
                        <Checkbox />
                    </div>
                </section>
                <form>
                <section className='inputsDatosCliente'>
                        <div className='grupoInput'>
                            <input type='date' className='inputFormularios w-2'  placeholder='Fecha de nacimiento*' value={fechaNacimiento}  required></input>                            
                            <label for="name" className="etiquetaInputs">Fecha de nacimiento* (formato dd/mm/aaaa)</label>
                        </div>
                        <div className='grupoInput'>
                            <input type='text' className='inputFormularios w-2' name="Dirección*" placeholder='Dirección*' defaultValue='Privet Drive No.4' value={direccion} required></input>
                            <label for="name" className="etiquetaInputs">Dirección*(calle, número, ciudad, estado, código postal)</label>
                        </div>
                        <div className='grupoInput'>
                            <input type='number' className='inputFormularios w-2' name='No. de cliente Zorro Abarrotero*' placeholder='No. de cliente Zorro Abarrotero*' value={numClienteZorro} required></input>
                            <label for="name" className="etiquetaInputs">No. de cliente Zorro Abarrotero*</label>
                        </div>
                        <div className='grupoInput'>
                            <input type='number' className='inputFormularios w-2' name='INE*' placeholder='INE*' value={numIne} required></input>
                            <label for="name" className="etiquetaInputs" defaultValue="4894892748278">INE*(10 dígitos de la parte posterior)</label>
                        </div>
                        <div className='grupoInput'>
                            <input type='text' className='inputFormularios w-2' name='Monto solicitado*' placeholder='Monto solicitado*' value={montoSolicitado} required></input>
                            <label for="name" className="etiquetaInputs">Monto solicitado* (coloque sólo el valor numérico)</label>
                        </div>
                        <Select placeholder = "Tipo de Credito"  options={tiposCredito} styles = {customSelectStyles} onChange = {handleSelectChange} defaultvalue={creditoSolicitado}/>
                    </section>
                    <section className='inputsReferenciasCliente'>
                        <div className='tarjetaReferencia'>
                            <h1>Referencia 1:</h1>
                            <input type='text' className='input-gral' placeholder='Nombre' defaultValue='Albus Dumbledore'></input>
                            <input type='text' className='input-gral' placeholder='Teléfono' defaultValue='7721232323'></input>
                        </div>
                        <div className='tarjetaReferencia'>
                            <h1>Referencia 2:</h1>
                            <input type='text' className='input-gral' placeholder='Nombre' defaultValue='Bellatrix Lestrange'></input>
                            <input type='text' className='input-gral' placeholder='Teléfono' defaultValue='273327329'></input>
                        </div>
                        <div className='tarjetaReferencia'>
                            <h1>Referencia 3:</h1>
                            <input type='text' className='input-gral' placeholder='Nombre' defaultValue='Tom Riddle'></input>
                            <input type='text' className='input-gral' placeholder='Teléfono' defaultValue='723662631'></input>
                        </div>
                    </section>
                    <section className='botonesEnviarSolicitud'>
                        <CustomLink tag='button' to='./administrarClientes' className="botonAzulMarino">Cancelar</CustomLink>
                        <CustomLink tag='button' to='./administrarClientes' className="botonSalmon">Guardar cambios</CustomLink>
                    </section>
                </form>
            </section>
        </main>
    );
}

export default EditarSolicitudCliente;