import React, {useState, useEffect} from 'react';
import './SolicitudCliente.css';
import '../components/Boton.css';
import zorrito from '../assets/zorrito.gif';
import '../components/plantillaInputs.css';
import Bienvenida from '../components/Bienvenida';
import Lateral from '../components/Lateral';
import asesor from '../assets/asesor.png';
import CustomLink from '../components/CustomLink';
import Select from 'react-select';
import IdleStateView from '../components/IdleStateView'
import axios from 'axios';

function EditarSolicitudCliente(props) {
    const [ status, setStatus ]= useState('idle');
    const [ datos , setDatos ] = useState({});
    const [ errorForm, setErrorForm ] = useState(null);
    const [ SelectValue, setSelectValue ] = useState([]);
    const [ ref, setRef ] = useState({});
    const [ ref2, setRef2 ] =useState({});
    const [ ref3, setRef3 ] =useState({});
    const [ refViejitas, setRefViejitas ] = useState({});
    const [ TabFocus, setTabFocus ] = useState(2);

    const customSelectStyles = {
        control: (base, state) => ({
            ...base,
            background: "#CACACA",
            borderRadius: "50px" ,
            boxShadow: state.isFocused ? null : null,
            padding: "7px 30px",
            fontSize: "1.2vw",
            marginTop:"1em",
            fontFamily: "Raleway",
            fontWeight: "600",
            "@media only screen and (max-width: 576px)": {
                ...base["@media only screen and (max-width: 576px)"],
                background:"#F2F5FA",
                fontSize: "4.5vw"
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
            "@media only screen and (max-width: 576px)": {
                ...base["@media only screen and (max-width: 576px)"],
                background:"#F2F5FA",
                fontSize: "4.5vw"
            },
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
                width:"100%"
            },
          })
    }

    const handleSelectChange = selectedOption => {
        setSelectValue(selectedOption);
    }

    
    useEffect(() =>{
        setStatus('loading')
        axios.get(`http://localhost:5000/applications/full-application-data/${props.match.params.idProspect}`)
        .then((result) => {
            setStatus('resolved')
            setDatos(result.data.infoSolicitud[0])
            setRef(result.data.referencias[0])
            setRef2(result.data.referencias[1])
            setRef3(result.data.referencias[2])
            setRefViejitas(result.data.referencias)
            
        })
        .catch((error) => {
            setStatus('error')
        })
    },[])

    const {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        numTelefono,    
        fechaNacimiento,    
        creditoSolicitado,
        numIne, 
        direccion,
        numClienteZorro,
        montoSolicitado,
    } = datos; 

    
    function handleChange(event){
        
        let nuevosDatos={
            ...datos, 
            ...ref,
            ...ref2,
            ...ref3,
            [event.target.name]: event.target.value
        }
        setDatos(nuevosDatos);
    }

    function handleRef1Change(event){
        let nuevosDatos={
            ...ref,
            [event.target.name]: event.target.value
        }
        setRef(nuevosDatos);
    }

    function handleRef2Change(event){
        let nuevosDatos={
            ...ref2,
            [event.target.name]: event.target.value
        }
        setRef2(nuevosDatos);
    }

    function handleRef3Change(event){
        let nuevosDatos={
            ...ref3,
            [event.target.name]: event.target.value
        }
        setRef3(nuevosDatos);
    }

    function handleSave(event){
        event.preventDefault();
        console.log(datos);
        console.log(ref);
        console.log(ref2);
        console.log(ref3);
        const applicationEdit=
 		{
			"client" : {
			"idClient" : datos.idClient,
			"fechaNacimiento" : datos.fechaNacimiento,
			"numClienteZorro" : datos.numClienteZorro,
			"numIne" : datos.numIne,
			"direccion" : datos.direccion
		},

		"application" : {
			"idClient" : datos.idClient,
			"idAssessor" : datos.idAssessor,
			"creditoSolicitado" : SelectValue.value,
			"montoSolicitado" : datos.montoSolicitado,
			"estatus": datos.estatus,
			"firmaSolicitud" : 1,
		},

		"reference1" : {
			"idClient" : datos.idClient,
			"refName" : ref.refName,
			"numTelefonoReferencia": ref.numTelefonoReferencia
		},

		"reference2" : {
			"idClient" : datos.idClient,
			"refName" : ref2.refName,
			"numTelefonoReferencia": ref2.numTelefonoReferencia
		},

		"reference3" : {
			"idClient" : datos.idClient,
			"refName" : ref3.refName,
			"numTelefonoReferencia":ref3.numTelefonoReferencia
		},
        
        "refViejitas" : refViejitas
    }
        console.log(applicationEdit)
        axios.patch(`http://localhost:5000/applications/clients/references/${props.match.params.idProspect}`, {
            body: applicationEdit,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((result)=>{
                alert('Solicitud modificada correctamente')
            })
            .catch(error =>{
                setErrorForm(error);
            })
    }

    const tiposCredito = [
        {value: 'simple' , label: 'Simple'},
        {value: 'revolvente' , label: 'Revolvente'}
    ]

    let fecha = new Date();
    let mes = fecha.toLocaleString('default', { month: 'long' });
    let tabs = ["Administrar prospectos", "Agregar prospectos", "Administrar Clientes"];
    
    if(status === 'idle' || status === 'loading'){
        return <IdleStateView/>
    }

    if(status === 'error'){
        return (
        <img  src={zorrito} alt= "zorroError" />
        )
    }

    if(status === 'resolved'){
        return(
            <main id='mainSolicitudCliente'>
                <aside>
                    <Lateral tabs = {tabs} img = {asesor} usuario={`http://localhost:5000/employees/assessor?thisAssessor=zorro5`} TabFocus={TabFocus} setTabFocus={setTabFocus}/>
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
                    </section>
                    <form onSubmit={handleSave}>
                    <section className='inputsDatosCliente'>
                        <div className='grupoInput'>
                            <input 
                                type='date' 
                                className='inputFormularios w-2' 
                                name="fechaNacimiento" 
                                placeholder='Fecha de nacimiento*' 
                                defaultValue={fechaNacimiento}  
                                onChange={handleChange}>
                            </input>                            
                            <label 
                                for="name" 
                                className="etiquetaInputs">
                                    Fecha de nacimiento* (formato dd/mm/aaaa)
                            </label>
                        </div>
                        <div className='grupoInput'>
                            <input 
                                type='text' 
                                className='inputFormularios w-2' 
                                name="direccion" 
                                placeholder='Dirección*'  
                                defaultValue={direccion} 
                                onChange={handleChange}
                            >
                            </input>
                            <label 
                                for="name" 
                                className="etiquetaInputs">
                                    Dirección*(calle, número, ciudad, estado, código postal)
                            </label>
                        </div>
                        <div className='grupoInput'>
                            <input 
                                type='number' 
                                className='inputFormularios w-2' 
                                name='numClienteZorro' 
                                placeholder='No. de cliente Zorro Abarrotero*' 
                                defaultValue={numClienteZorro} 
                                onChange={handleChange}>
                            </input>
                            <label 
                                for="name" 
                                className="etiquetaInputs">
                                    No. de cliente Zorro Abarrotero*
                            </label>
                        </div>
                        <div className='grupoInput'>
                            <input 
                                type='number' 
                                className='inputFormularios w-2' 
                                name='numIne' 
                                placeholder='INE*' 
                                defaultValue={numIne} 
                                onChange={handleChange}>
                            </input>
                            <label 
                                for="name" 
                                className="etiquetaInputs" 
                                defaultValue="4894892748278">
                                    INE*(10 dígitos de la parte posterior)
                            </label>
                        </div>
                        <div className='grupoInput'>
                            <input 
                                type='text' 
                                className='inputFormularios w-2' 
                                name='montoSolicitado' 
                                placeholder='Monto solicitado*' 
                                defaultValue={montoSolicitado} 
                                onChange={handleChange}>
                            </input>
                            <label 
                                for="name" 
                                className="etiquetaInputs">
                                    Monto solicitado* (coloque sólo el valor numérico)
                            </label>
                        </div>
                        <Select 
                            options={tiposCredito} 
                            styles = {customSelectStyles} 
                            onChange = {handleSelectChange} 
                            placeholder={creditoSolicitado}
                        />
                        </section>
                        <section className='inputsReferenciasCliente'>
                            <div className='tarjetaReferencia'>
                                <h1>Referencia 1:</h1>
                                <input 
                                    type='text' 
                                    className='input-gral' 
                                    placeholder='Nombre' 
                                    name='refName'  
                                    defaultValue={ref.refName} 
                                    onChange = {handleRef1Change} 
                                    disabled></input>
                                <input 
                                    type='text' 
                                    className='input-gral' 
                                    placeholder='Teléfono' 
                                    name='numTelefonoReferencia' 
                                    defaultValue={ref.numTelefonoReferencia} 
                                    onChange = {handleRef1Change}>
                                </input>
                            </div>
                            <div className='tarjetaReferencia'>
                                <h1>Referencia 2:</h1>
                                <input 
                                type='text' 
                                className='input-gral' 
                                placeholder='Nombre' 
                                name='refName' 
                                defaultValue={ref2.refName} 
                                onChange = {handleRef2Change} 
                                disabled>
                                </input>
                                <input 
                                type='text' 
                                className='input-gral' 
                                placeholder='Teléfono'  
                                name='numTelefonoReferencia' 
                                defaultValue={ref2.numTelefonoReferencia} 
                                onChange = {handleRef2Change}>
                                </input>
                            </div>
                            <div className='tarjetaReferencia'>
                                <h1>Referencia 3:</h1>
                                <input 
                                    type='text' 
                                    className='input-gral' 
                                    placeholder='Nombre'  
                                    name='refName' 
                                    defaultValue={ref3.refName} 
                                    onChange = {handleRef3Change} 
                                    disabled>
                                </input>
                                <input 
                                    type='text' 
                                    className='input-gral' 
                                    placeholder='Teléfono'  
                                    name='numTelefonoReferencia' 
                                    defaultValue={ref3.numTelefonoReferencia} 
                                    onChange = {handleRef3Change}>
                                </input>
                            </div>
                        </section>
                        <section className='botonesEnviarSolicitud'>
                            <CustomLink 
                                tag='button' 
                                to='/administrarClientes' 
                                className="botonAzulMarino">Cancelar
                            </CustomLink>
                            <CustomLink 
                                tag='button' 
                                type='submit' 
                                className="botonSalmon" 
                                onSubmit={handleSave}>Guardar cambios
                            </CustomLink>
                        </section>
                    </form>
                </section>
            </main>
        );
    }
}

export default EditarSolicitudCliente;