import React, { useState , useEffect}  from 'react';
import axios from 'axios'
import Lateral from '../components/Lateral';
import CustomLink from'../components/CustomLink';
import Bienvenida from '../components/Bienvenida';
import RadioButton from '../components/RadioButton';
import './AgregarEditarUsuario.css';
import '../components/plantillaInputs.css'
import '../components/Boton.css'
import admin from '../assets/persona.svg';
import Select from 'react-select'

function VentanaEditarUsuario(props) {
    let tabs = ["Administrar Usuarios", "Agregar Usuario"];
    let tiendas =[];
    let tiendasAsociadas =[];
    let departamentos =[];
    let departamentoAsociado = '';
    
    //React Select Styles
    const customSelectStyles = {
        control: (base, state) => ({
            ...base,
            background: "#CACACA",
            borderRadius: "50px" ,
            boxShadow: state.isFocused ? null : null,
            padding: "0px 30px",
            fontSize: "1.2vw",
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
            width:"44.5%",
            "@media only screen and (max-width: 576px)": {
                ...base["@media only screen and (max-width: 576px)"],
                width:"100%"
            },
          })
    }

    //Hooks
    const [SelectStatus, setSelectStatus] = useState('hidden');
    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [employee, setEmployee] = useState({});
    const [checked, setChecked] = useState(false);
    const [stores, setStores] = useState([]);
    const [SelectValue, setSelectValue] = useState([]);
    

    useEffect(()=>{
        setStatus('loading')
        if(props.match.params.puesto==='Asesor'){
            setSelectStatus('asesor');
            setChecked(true)
            //Asesor
            axios.get(`http://localhost:5000/employees/assessor?thisAssessor=${props.match.params.idEmployee}`)
                .then((result)=>{
                    setEmployee(result.data)
                    setStatus('resolved')
                })
                .catch((error)=>{
                    setError(error)
                    setStatus('error')
                }); 
        }

        else if (props.match.params.puesto==='Analista'){
            setSelectStatus('analista');
            setChecked(true)
            //Analista
            axios.get(`http://localhost:5000/employees/analyst?thisAnalyst=${props.match.params.idEmployee}`)
                .then((result)=>{
                    setEmployee(result.data)
                    setStatus('resolved')
                })
                .catch((error)=>{
                    setError(error)
                    setStatus('error')
                });
        }

        //Obtiene lista de tiendas
        axios.get(`http://localhost:5000/stores/allStores`)
            .then((result)=>{
                setStores(result.data.tiendas)
            })
            .catch((error)=>{
                setError(error)
            });
    }, [])
    
    
    function handleChange(event){
        let newEmployee = {
            ...employee,
            [event.target.name]: event.target.value,
        };

        setEmployee(newEmployee)
    }

    const handleSelectChange = selectedOption => {
        setSelectValue(selectedOption);
    }

     //Función que se ejecuta al registrar un empleado
     function handleSave(event){
        event.preventDefault();
        console.log(SelectValue)

        const {
            nombre,
            apellidoPaterno,
            apellidoMaterno,
            correoElectronico,
            numTelefono} = employee;
        

        if(SelectStatus==='analista'){
            
            const{value} = SelectValue;
            const departamento = value;
            const puesto = "Analista";

            let analistaBack={
                employee:{
                        nombre,
                        apellidoPaterno,
                        apellidoMaterno,
                        correoElectronico,
                        numTelefono,
                        puesto,
                },
                analyst:{
                    departamento
                } 
            }

            axios.patch(`http://localhost:5000/employees/${props.match.params.idEmployee}/analysts`, {
                body: analistaBack,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then((result)=>{
                    // props.onSave(result.data.data);
                    alert('Analista modificado correctamente')
                })
                .catch(error =>{
                })
        }
        
        
        else if(SelectStatus==='asesor'){

            const idTiendas = SelectValue.map(function(registro, indice){ 
                return registro.value;
            });

            console.log(idTiendas)
            const puesto = "Asesor";

            let asesorBack={
                employee:{
                        nombre,
                        apellidoPaterno,
                        apellidoMaterno,
                        correoElectronico,
                        numTelefono,
                        puesto,
                }
            }

            axios.patch(`http://localhost:5000/employees/${props.match.params.idEmployee}/assessor`, {
                body: asesorBack,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then((result)=>{
                    alert('Asesor modificado correctamente')
                    for(let i=0; i<idTiendas.length;i++){
                        let assessorData = {"idAssessor" : props.match.params.idEmployee}
                        axios.patch(`http://localhost:5000/stores/${idTiendas[i]}`, {
                                data: assessorData,
                                headers: {
                                    'Content-type': 'application/json; charset=UTF-8',
                                }
                            })
                            .then((result)=>{
                                // props.onSave(result.data.data);
                                alert('Asesor modificado correctamente')
                            })
                            .catch(error =>{
                            })
                     }
                })
                .catch(error =>{

                })
                   
        }
                
        else {
            alert('Por favor seleccione un puesto para el empleado')
        }

    }
        
    if(status === 'idle' || status === 'loading'){
        return <h1>Loading...</h1>
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

        tiendas = stores.map(function(registro, indice){ 
            return {value: registro.idStore, label: registro.nombreTienda};
        });

        departamentos = [
            {value: 'OFICINA CENTRAL', label: 'OFICINA CENTRAL'}
        ]

        if(props.match.params.puesto==='Asesor'){
            tiendasAsociadas = employee.datosTienda.map(function(registro, indice){ 
                return {value: registro.idStore, label: registro.nombreTienda};
            });
        }

        else if(props.match.params.puesto==='Analista'){
           departamentoAsociado = employee.datosAnalista.departamento; 
           console.log(departamentoAsociado)
        }
        
        return(
            <React.Fragment>
                <main>
                    <aside>
                        <Lateral img = {admin} usuario="Admin #1234" tabs={tabs} />
                    </aside>
                    <section className='contentPageForms'>
                        <header>
                            <Bienvenida txtBienvenida = "Bienvenido, Administrador" txtVentana="Editar usuario"/>
                        </header>
                        <form onSubmit={handleSave} className="form-custom">
                            <section className="radiosContentPage">
                                
                                {SelectStatus === 'asesor' ? 
                                    <>
                                    <RadioButton  isChecked={checked} etiqueta="Asesor" SelectStatus={SelectStatus} setSelectStatus={setSelectStatus}/> 
                                    <RadioButton  etiqueta="Analista" SelectStatus={SelectStatus} setSelectStatus={setSelectStatus}/>
                                </> : null}

                                {SelectStatus === 'analista' ? 
                                    <>
                                    <RadioButton   etiqueta="Asesor" SelectStatus={SelectStatus} setSelectStatus={setSelectStatus}/> 
                                    <RadioButton  isChecked={checked} etiqueta="Analista" SelectStatus={SelectStatus} setSelectStatus={setSelectStatus}/>
                                </> : null}
                            </section>
                            <section className="inputsContentPage">
                                <div className='grupoInput-3'>
                                    <input className = "input-gral inputFormularios" type="text" name="nombre" placeholder="Nombre(s)*" defaultValue={employee.datosEmpleado.nombre} onChange = {handleChange} required/>
                                    <label htmlFor="name" className="etiquetaInputs">Nombre(s)</label>
                                </div>
                                <div className='grupoInput-3'>
                                    <input className = "input-gral inputFormularios" type="text" name="apellidoPaterno" placeholder="Apellido Paterno*" defaultValue={employee.datosEmpleado.apellidoPaterno} onChange = {handleChange} required/>
                                    <label htmlFor="name" className="etiquetaInputs">Apellido Paterno*</label>
                                </div>
                                <div className='grupoInput-3'>
                                    <input className = "input-gral inputFormularios" type="text" name="apellidoMaterno" placeholder="Apellido Materno" defaultValue={employee.datosEmpleado.apellidoMaterno} onChange = {handleChange} />
                                    <label htmlFor="name" className="etiquetaInputs">Apellido Materno*</label>
                                </div>
                                <div className='grupoInput-2'>
                                    <input className = "input-gral w-2 inputFormularios" type="tel" name="numTelefono" placeholder="Número de teléfono" defaultValue={employee.datosEmpleado.numTelefono} onChange = {handleChange} required/>
                                    <label htmlFor="name" className="etiquetaInputs">Número de teléfono (10 dígitos)*</label>
                                </div>
                                <div className='grupoInput-2'>
                                <input className = "input-gral w-2 inputFormularios" type="email" name="correoElectronico" placeholder="Correo electrónico" defaultValue={employee.datosEmpleado.correoElectronico} onChange = {handleChange} required/>
                                    <label htmlFor="name" className="etiquetaInputs">Correo Electrónico*</label>
                                </div>
                                {props.match.params.puesto === 'Asesor' && SelectStatus === 'asesor' ? <Select defaultValue = {tiendasAsociadas} options={tiendas} isMulti styles = {customSelectStyles} onChange = {handleSelectChange}/> : null}
                                {props.match.params.puesto === 'Analista' && SelectStatus === 'analista' ? <Select placeholder ={departamentoAsociado} options={departamentos} styles = {customSelectStyles} onChange = {handleSelectChange}/> : null}
                                {props.match.params.puesto === 'Asesor' && SelectStatus !== 'asesor' ? <Select placeholder = 'Departamento' options={departamentos} styles = {customSelectStyles} onChange = {handleSelectChange}/> : null}
                                {props.match.params.puesto === 'Analista' && SelectStatus !== 'analista' ? <Select placeholder='Tiendas' options={tiendas} isMulti styles = {customSelectStyles} onChange = {handleSelectChange}/> : null}
                            </section>

                            <section className="botonesContentPage">
                                <CustomLink tag='button' to='/administrarUsuarios' className="botonAzulMarino">Cancelar</CustomLink>
                                <CustomLink tag='button' className="botonSalmon" type='submit'>Guardar cambios</CustomLink>

                            </section>
                        </form>
                        
                    </section>
                </main>
            </React.Fragment>
        );
    }
}
export default VentanaEditarUsuario;