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
    let tabs = ["Administrar Usuarios", "Agregar Usuario"];
    
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ]
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
            "@media only screen and (max-width: 576px)": {
                ...base["@media only screen and (max-width: 576px)"],
                background:"#F2F5FA",
            },
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
                width:"90%",
            },
          })
    }

    const [SelectStatus, setSelectStatus] = useState('hidden');
    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [employee, setEmployee] = useState({});
    
    function handleSave(event){
        event.preventDefault();

        setStatus('loading')
        setError(null)

        axios.patch(`http://localhost:5000/users/`, {
            body: JSON.stringify(employee),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((result)=>{
            props.onSave(result.data.data);
            setStatus('pristine')
        })
        .catch(error =>{
            setError(error)
            setStatus('error')
        })


    }

    if(status === 'idle' || status === 'loading'){
        return <h1>Loading...</h1>
    }

    if(status === 'error'){
        return <h1>There was an error</h1>
    }

    if(status === 'resolved'){

        return(
            <React.Fragment>
                <main>
                    <aside>
                        <Lateral img = {admin} usuario="Admin #1234" tabs={tabs} />
                    </aside>
                    <section className='contentPageForms'>
                        <header>
                            <Bienvenida txtBienvenida = "Bienvenido, Administrador" txtVentana="Agregar usuario"/>
                        </header>
                        <form onSubmit={handleSave}>
                            <section className="radiosContentPage">
                                <RadioButton etiqueta="Asesor" SelectStatus={SelectStatus} setSelectStatus={setSelectStatus}/>
                                <RadioButton etiqueta="Analista" SelectStatus={SelectStatus} setSelectStatus={setSelectStatus}/>
                            </section>
                            <section className="inputsContentPage">
                                <form action="" className="inputsContentPage">
                                    <input className = "input-gral w-2" type="text" name="idEmployee" placeholder="ID de Empleado"/>
                                    <input className = "input-gral w-2" type="password" name="contrasena" placeholder="Contraseña"/>
                                    <input className = "input-gral w-3" type="text" name="nombres"  placeholder="Nombre(s)"/>
                                    <input className = "input-gral w-3" type="text" name="apellidop"  placeholder="Apellido Paterno"/>
                                    <input className = "input-gral w-3" type="text" name="apellidom" placeholder="Apellido Materno"/>
                                    <input className = "input-gral w-2" type="tel" name="numtelefono"  placeholder="Número de teléfono"/>
                                    <input className = "input-gral w-2" type="email" name="correo" placeholder="Correo electrónico"/>
                                    {SelectStatus === 'analista' ? <Select placeholder = "Departamento" options={options} styles = {customSelectStyles}/> : null}
                                    {SelectStatus === 'asesor' ? <Select  placeholder = "Tiendas" options={options} isMulti styles = {customSelectStyles}/> : null}
                                </form>
                            </section>
                            <section className="botonesContentPage">
                                <CustomLink tag='button' to='./administrarUsuarios' className="botonAzulMarino">Cancelar</CustomLink>
                                <CustomLink tag='button' to='./administrarUsuarios' className="botonSalmon">Registrar</CustomLink>
                            </section>
                        </form>
                       
                    </section>
                </main>
            </React.Fragment>
        );
    }
}
export default VentanaAgregarUsuario;