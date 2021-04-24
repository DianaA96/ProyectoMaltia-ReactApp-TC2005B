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
            padding: "7px 30px",
            fontSize: "22px",
            fontFamily: "Raleway",
            fontWeight: "600",
          }),
          menu: base => ({
            ...base,
            borderRadius: "25px",
            fontSize: "22px",
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
            width:"44.5%",
            "@media only screen and (max-width: 576px)": {
                ...base["@media only screen and (max-width: 576px)"],
                width:"100%",
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
    
    
    function handleChange(){

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
                        <form onSubmit={handleChange}>
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
                                    <input className = "input-gral w-3" type="text" name="nombres" placeholder="Nombre(s)" defaultValue={employee.datosEmpleado.nombre}/>
                                    <input className = "input-gral w-3" type="text" name="apellidom" placeholder="Apellido Materno" defaultValue={employee.datosEmpleado.apellidoPaterno}/>
                                    <input className = "input-gral w-3" type="text" name="apellidop" placeholder="Apellido Paterno" defaultValue={employee.datosEmpleado.apellidoMaterno}/>
                                    <input className = "input-gral w-2" type="tel" name="numtelefono" placeholder="Número de teléfono" defaultValue={employee.datosEmpleado.numTelefono}/>
                                    <input className = "input-gral w-2" type="email" name="correo" placeholder="Correo electrónico" defaultValue={employee.datosEmpleado.correoElectronico}/>
                                    
                                    {props.match.params.puesto === 'Asesor' && SelectStatus === 'asesor' ? <Select defaultValue = {tiendasAsociadas} options={tiendas} isMulti styles = {customSelectStyles}/> : null}
                                    {props.match.params.puesto === 'Analista' && SelectStatus === 'analista' ? <Select placeholder ={departamentoAsociado} options={departamentos} styles = {customSelectStyles}/> : null}
                                    {props.match.params.puesto === 'Asesor' && SelectStatus !== 'asesor' ? <Select placeholder = 'Departamento' options={departamentos} styles = {customSelectStyles}/> : null}
                                    {props.match.params.puesto === 'Analista' && SelectStatus !== 'analista' ? <Select placeholder='Tiendas' options={tiendas} isMulti styles = {customSelectStyles}/> : null}
                                    
                            </section>

                            <section className="botonesContentPage">
                                <CustomLink tag='button' to='./administrarUsuarios' className="botonAzulMarino">Cancelar</CustomLink>
                                <CustomLink tag='button' to='./administrarUsuarios' className="botonSalmon" type='submit'>Guardar cambios</CustomLink>

                            </section>
                        </form>
                        
                    </section>
                </main>
            </React.Fragment>
        );
    }
}
export default VentanaEditarUsuario;