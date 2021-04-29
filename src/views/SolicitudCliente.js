import React , {useState,useEffect} from 'react';
import './SolicitudCliente.css';
import '../components/Boton.css';
import '../components/plantillaInputs.css';
import Bienvenida from '../components/Bienvenida';
import Lateral from '../components/Lateral';
import Checkbox from '../components/Checkbox';
import asesor from '../assets/asesor.png';
import CustomLink from '../components/CustomLink';
import Select from 'react-select';
import axios from 'axios';

function SolicitudCliente(props) {
    const [status, setStatus]= useState('idle');
    const [datos , setDatos] = useState([]);
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

    const{
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        numTelefono,
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

    function handleChange(event){
        let newApplication={
            ...fullApplication,
            [event.target.name]: event.target.value,
        };
        setFullApplication(newApplication)
    }

    const handleSelectChange = selectedOption => {
        setSelectValue(selectedOption);
    }

    function handleSave(event){
        event.preventDefault()
        console.log(fullApplication)

        const idClient= parseInt(props.match.params.idProspect)
        const creditoSolicitado = SelectValue.value
        const estatus = "No revisado"
        const firmaSolicitud=1


        const {
            fechaNacimiento,
            direccion,
            numClienteZorro,
            numIne,
            montoSolicitado,
            refName1,
            numTelefonoReferencia1,
            refName2,
            numTelefonoReferencia2,
            refName3,
            numTelefonoReferencia3
        }=fullApplication

        const applicationBack={
            client : {
                idClient,
                fechaNacimiento ,
                numClienteZorro ,
                numIne,
                direccion,
            },
            
            application : {
                idClient ,
                idAssessor ,
                creditoSolicitado ,
                montoSolicitado,
                estatus,
                firmaSolicitud 
            },
            
            reference1 : {
                idClient,
                refName : refName1,
                numTelefonoReferencia: numTelefonoReferencia1
            },
            
            reference2 : {
                idClient ,
                refName : refName2,
                numTelefonoReferencia: numTelefonoReferencia2
            },
            
            reference3 : {
                idClient ,
                refName : refName3,
                numTelefonoReferencia: numTelefonoReferencia3
            }
        }

        console.log(applicationBack)
        axios({
            method: 'post',
            url: 'http://localhost:5000/applications/clients/references',
            data:{
                body: applicationBack,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }
        })
        .then((result)=>{
            alert('Solicitud creada correctamente')
            setStatus('resolved')
        })
        .catch((error)=>{
            setStatus('error')
        })
        

    }
    
    let fecha = new Date();
    let varFecha = `${fecha.getDate()} de ${fecha.toLocaleString('default', { month: 'long' })} del ${fecha.getFullYear()}`;
    let tabs = ["Administrar prospectos", "Agregar prospectos", "Administrar Clientes"];

        //cambiar por el de diana
    if(status=== 'idle' || status === 'loading'){
       return<h1>loading...</h1>
    }

    //no c 
    if(status === 'error'){
        return<h1>oops</h1>
    }

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
                            <p><i class="fas fa-phone-alt"></i> &nbsp; {numTelefono}</p>
                        </div>
                        <div className='checkSolicitud'>
                            <p>Solicitud firmada:</p>
                            <Checkbox setCheckTrue={setIsCheck}/>
                        </div>
                    </section>
                    <form  onSubmit={handleSave}>
                        <section className='inputsDatosCliente'>
                            <div className='grupoInput'>
                                <input type='text' className='inputFormularios w-2' name="fechaNacimiento" placeholder='Fecha de nacimiento*' onFocus={(e) => {e.currentTarget.type = 'date'}} required onChange = {handleChange} ></input>                            
                                <label htmlFor="name" className="etiquetaInputs">Fecha de nacimiento* (formato dd/mm/aaaa)</label>
                            </div>
                            <div className='grupoInput'>
                                <input type='text' className='inputFormularios w-2' name="direccion" placeholder='Dirección*' required  onChange = {handleChange}></input>
                                <label htmlFor="name" className="etiquetaInputs">Dirección*(calle, número, ciudad, estado, código postal)</label>
                            </div>
                            <div className='grupoInput'>
                                <input type='number' className='inputFormularios w-2' name='numClienteZorro' placeholder='No. de cliente Zorro Abarrotero*' required  onChange = {handleChange}></input>
                                <label htmlFor="name" className="etiquetaInputs">No. de cliente Zorro Abarrotero*</label>
                            </div>
                            <div className='grupoInput'>
                                <input type='number' className='inputFormularios w-2' name='numIne' placeholder='INE*' required  onChange = {handleChange}></input>
                                <label htmlFor="name" className="etiquetaInputs">INE*(10 dígitos de la parte posterior)</label>
                            </div>
                            
                            <div className='grupoInput'>
                                <input type='number' className='inputFormularios w-2' name='montoSolicitado' placeholder='Monto solicitado*' required  onChange = {handleChange}></input>
                                <label htmlFor="name" className="etiquetaInputs">Monto solicitado*(coloque sólo el valor numérico)</label>
                            </div>
                            <Select placeholder = "Tipo de crédito"  options={tiposCredito} styles = {customSelectStyles} onChange = {handleSelectChange}/>
                        </section>
                        <section className='inputsReferenciasCliente'>
                            <div className='tarjetaReferencia'>
                                <h1>Referencia 1:</h1>
                                <input type='text' className='input-gral' placeholder='Nombre' name="refName1"  onChange = {handleChange}></input>
                                <input type='text' className='input-gral' placeholder='Teléfono' name='numTelefonoReferencia1'  onChange = {handleChange}></input>
                            </div>
                            <div className='tarjetaReferencia'>
                                <h1>Referencia 2:</h1>
                                <input type='text' className='input-gral' placeholder='Nombre' name="refName2"  onChange = {handleChange}></input>
                                <input type='text' className='input-gral' placeholder='Teléfono' name='numTelefonoReferencia2'  onChange = {handleChange}></input>
                            </div>
                            <div className='tarjetaReferencia'>
                                <h1>Referencia 3:</h1>
                                <input type='text' className='input-gral' placeholder='Nombre' name="refName3"  onChange = {handleChange}></input>
                                <input type='text' className='input-gral' placeholder='Teléfono' name='numTelefonoReferencia3'  onChange = {handleChange}></input>
                            </div>
                        </section>
                        <section className='botonesEnviarSolicitud'>
                            <CustomLink tag='button' to='/administrarProspectos' className="botonAzulMarino">Cancelar</CustomLink>
                            <CustomLink tag='button' type='submit' className='botonSalmon' >Enviar Solicitud</CustomLink>
                        </section>
                    </form>
                </section>
            </main>
        );
    }
}
export default SolicitudCliente;
                