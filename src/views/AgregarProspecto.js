import Lateral from '../components/Lateral';
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
import Select from 'react-select'

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
    const [ stores, setStores] = useState([]);
    const [ SelectValue, setSelectValue ] = useState();

    let tiendas =[];

    useEffect(()=>{
        //Obtiene lista de tiendas
        axios.get(`http://localhost:5000/stores/allStores`)
            .then((result)=>{
                setStores(result.data.tiendas)
            })
            .catch((error)=>{
                
            });
    }, [])

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
            width:"48%",
            "@media only screen and (max-width: 576px)": {
                ...base["@media only screen and (max-width: 576px)"],
                width:"90%",
            },
          })
    }

    const handleSelectChange = selectedOption => {
        let { label, value } = selectedOption
        setSelectValue(value);
    }
    
    function handleChange(event) {
        console.log(SelectValue)
        let nuevaInfo = {
            ...prospect,
            idAssessor: idLoggedAssessor,
            [event.target.name]: event.target.value,
            idStore: SelectValue
        }
        setProspect(nuevaInfo)
        console.log(nuevaInfo)
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

    tiendas = stores.map(function(registro, indice){ 
        return {value: registro.idStore, label: registro.nombreTienda};
    });

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
                    <section className="inputsContentPage mt-5">
                        <div className='grupoInput-3'>
                            <input name="nombre" className = "input-gral inputFormularios" type="text" placeholder="Nombre(s)*"onChange={handleChange} required/>
                            <label htmlFor="name" className="etiquetaInputs">Nombre(s)*</label>
                        </div>
                        
                        <div className='grupoInput-3'>
                            <input name="apellidoPaterno" className = "input-gral inputFormularios" type="text" placeholder="Apellido paterno*"onChange={handleChange} required/>
                            <label htmlFor="name" className="etiquetaInputs">Apellido Paterno*</label>
                        </div>
                        
                        <div className='grupoInput-3'>
                            <input name="apellidoMaterno" className = "input-gral inputFormularios" type="text" placeholder="Apellido materno"onChange={handleChange}/>
                            <label htmlFor="name" className="etiquetaInputs">Apellido Materno</label>
                        </div>
                       
                        <div className='grupoInput-2'>
                            <input name="numTelefono" className = "input-gral w-2 inputFormularios" type="number" placeholder="Número de teléfono*"onChange={handleChange} required/>
                            <label htmlFor="name" className="etiquetaInputs">Número de teléfono (10 dígitos)*</label>
                        </div>

                        <div className='grupoInput-2'>
                            <input name="correoElectronico"  className = "input-gral w-2 inputFormularios"  type="email"  placeholder="Correo electrónico*" onChange={handleChange} required/>
                            <label htmlFor="name" className="etiquetaInputs">Correo electrónico*</label>
                        </div>
            
                        <Select name="idStore" placeholder = "RED"  options={tiendas} styles = {customSelectStyles} onChange = {handleSelectChange}/>
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