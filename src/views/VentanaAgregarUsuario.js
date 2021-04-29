import React, { useState , useEffect}  from 'react';
import axios from 'axios'
import Lateral from '../components/Lateral';
import CustomLink from '../components/CustomLink';
import Bienvenida from '../components/Bienvenida';
import RadioButton from '../components/RadioButton';
import './AgregarEditarUsuario.css';
import '../components/plantillaInputs.css';
import '../components/Boton.css';
import admin from '../assets/persona.svg';
import Select from 'react-select'


function VentanaAgregarUsuario(props) {

    let tiendas =[];
    const [employee, setEmployee] = useState({})
    const [stores, setStores] = useState([]);
    const [SelectStatus, setSelectStatus] = useState('hidden');
    const [SelectValue, setSelectValue] = useState([]);
    const [TabFocus, setTabFocus] = useState(1);

    useEffect(()=>{
        //Obtiene lista de tiendas
        axios.get(`http://localhost:5000/stores/allStores`)
            .then((result)=>{
                setStores(result.data.tiendas)
            })
            .catch((error)=>{
                
            });
    }, [])


    let tabs = ["Administrar Usuarios", "Agregar Usuario"];
    
    const departamentos = [
        {value: 'OFICINA CENTRAL', label: 'OFICINA CENTRAL'}
    ]

    const {
        idEmployee,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        correoElectronico,
        numTelefono,
        contrasena,
    } = employee;

    

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
            width:"48%",
            "@media only screen and (max-width: 576px)": {
                ...base["@media only screen and (max-width: 576px)"],
                width:"100%",
            },
          })
    }

    

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

        

        const {idEmployee,
            nombre,
            apellidoPaterno,
            apellidoMaterno,
            correoElectronico,
            numTelefono,
            contrasena} = employee;
        

        if(SelectStatus==='analista'){
            
            const{value} = SelectValue;
            const departamento = value;
            const puesto = "Analista";

            let analistaBack={
                employee:{
                        idEmployee,
                        nombre,
                        apellidoPaterno,
                        apellidoMaterno,
                        correoElectronico,
                        numTelefono,
                        puesto,
                        contrasena
                },
                analyst:{
                    departamento
                } 
            }

            axios({
                method: 'post',
                url: 'http://localhost:5000/employees/analysts',
                data: analistaBack,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
                
            })
                .then((result)=>{
                    // props.onSave(result.data);
                    alert('Analista registrado correctamente');
                })
                .catch(error =>{
                    alert('No se pudo registrar el analista:', error);
                })
        }
        
        
        else if(SelectStatus==='asesor'){

            const idTiendas = SelectValue.map(function(registro, indice){ 
                return registro.value;
            });
            
            const puesto = "Asesor";

            let asesorBack={
                employee:{
                        idEmployee,
                        nombre,
                        apellidoPaterno,
                        apellidoMaterno,
                        correoElectronico,
                        numTelefono,
                        puesto,
                        contrasena
                }
            }

            axios({
                method: 'post',
                url: 'http://localhost:5000/employees/assessors',
                data: asesorBack,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then((result)=>{
                    // alert('Asesor registrado correctamente.')
                    for(let i=0; i<idTiendas.length;i++){
                        console.log(typeof(idTiendas[i]), asesorBack.employee.idEmployee)
        
                        let assessorData = {"idAssessor" : asesorBack.employee.idEmployee}
                        axios.patch(`http://localhost:5000/stores/${idTiendas[i]}`, {
                                data: assessorData,
                                headers: {
                                    'Content-type': 'application/json; charset=UTF-8',
                                }
                            })
                            .then((result)=>{
                                // props.onSave(result.data.data);
                                alert('Asesor registrado correctamente.')
                            })
                            .catch(error =>{
                                alert(error)
                            })
                    }
                })
                .catch(error =>{
                    alert(error)
                });

            
        }

        else {
            alert('Por favor seleccione un puesto para el empleado')
        }

    }

    tiendas = stores.map(function(registro, indice){ 
        return {value: registro.idStore, label: registro.nombreTienda};
    });

        return(

            <React.Fragment>
                <main>
                    <aside>
                        <Lateral img = {admin} usuario="Admin #1234" tabs={tabs} TabFocus={TabFocus} setTabFocus={setTabFocus}/>
                    </aside>
                    <section className='contentPageForms'>
                        <header>
                            <Bienvenida txtBienvenida = "Bienvenido, Administrador" txtVentana="Agregar usuario"/>
                        </header>
                        <form onSubmit={handleSave} className="form-custom">
                            <section className="radiosContentPage">
                                <RadioButton etiqueta="Asesor" SelectStatus={SelectStatus} setSelectStatus={setSelectStatus}/>
                                <RadioButton etiqueta="Analista" SelectStatus={SelectStatus} setSelectStatus={setSelectStatus}/>
                            </section>
                            <section className="inputsContentPage">
                                <div className='grupoInput-3'>
                                    <input className = "input-gral inputFormularios" type="text" name="nombre"  placeholder="Nombre(s)*" onChange = {handleChange} required/>
                                    <label htmlFor="name" className="etiquetaInputs">Nombre(s)</label>
                                </div>
                                <div className='grupoInput-3'>
                                    <input className = "input-gral inputFormularios" type="text" name="apellidoPaterno"  placeholder="Apellido Paterno*" onChange = {handleChange} required/>
                                    <label htmlFor="name" className="etiquetaInputs">Apellido Paterno</label>
                                </div>
                                <div className='grupoInput-3'>
                                    <input className = "input-gral inputFormularios" type="text" name="apellidoMaterno" placeholder="Apellido Materno" onChange = {handleChange} />
                                    <label htmlFor="name" className="etiquetaInputs">Apellido Materno</label>
                                </div>
                                <div className='grupoInput-2'>
                                    <input className = "input-gral inputFormularios w-2" type="text" name="idEmployee" placeholder="ID de Empleado*" onChange = {handleChange} required/>
                                    <label htmlFor="name" className="etiquetaInputs">ID de Empleado</label>
                                </div>
                                <div className='grupoInput-2'>
                                    <input className = "input-gral inputFormularios w-2" type="password" name="contrasena" placeholder="Contraseña*" onChange = {handleChange} required/>
                                    <label htmlFor="name" className="etiquetaInputs">Contraseña</label>
                                </div>
                                <div className='grupoInput-2'>
                                    <input className = "input-gral inputFormularios w-2" type="tel" name="numTelefono"  placeholder="Número de teléfono*" onChange = {handleChange} required/>
                                    <label htmlFor="name" className="etiquetaInputs">Número de teléfono (10 dígitos) </label>
                                </div>
                                <div className='grupoInput-2'>
                                <input className = "input-gral inputFormularios w-2" type="email" name="correoElectronico" placeholder="Correo electrónico*" onChange = {handleChange} required/>
                                    <label htmlFor="name" className="etiquetaInputs">Correo Electrónico</label>
                                </div>
                                {SelectStatus === 'analista' ? <Select placeholder = "Departamento"  options={departamentos} styles = {customSelectStyles} onChange = {handleSelectChange}/> : null}
                                {SelectStatus === 'asesor' ? <Select  placeholder = "Tiendas"  options={tiendas} isMulti styles = {customSelectStyles} onChange = {handleSelectChange}/> : null}
                            </section>
                            <section className="botonesContentPage">
                                <CustomLink tag='button' to='/administrarUsuarios' className="botonAzulMarino" >Cancelar</CustomLink>
                                <CustomLink tag='button' to='/AgregarUsuario' className="botonSalmon" type="submit" >Registrar</CustomLink>
                            </section>
                        </form>
                    </section>
                </main>
            </React.Fragment>
        );
    }

export default VentanaAgregarUsuario;