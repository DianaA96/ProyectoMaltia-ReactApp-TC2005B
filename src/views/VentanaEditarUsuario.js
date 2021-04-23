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
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        setStatus('loading')
        if(props.match.params.puesto==='Asesor'){
            setSelectStatus('asesor');
            setChecked(true)
            //Asesor
            axios.get(`http://localhost:5000/employees/assessor?thisAssessor=${props.match.params.idEmployee}`)
                .then((result)=>{
                    setEmployee(result.data.datosEmpleado)
                    setStatus('resolved')
                })
                .catch((error)=>{
                    setError(error)
                    setStatus('error')
                })
        }
        else if (props.match.params.puesto==='Analista'){
            setSelectStatus('analista');
            setChecked(true)
            //Analista
            axios.get(`http://localhost:5000/employees/analyst?thisAnalyst=${props.match.params.idEmployee}`)
                .then((result)=>{
                    setEmployee(result.data.datosEmpleado)
                    setStatus('resolved')
                })
                .catch((error)=>{
                    setError(error)
                    setStatus('error')
                })
        }

}, [])
    

        
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
                            <form action="" className="inputsContentPage">
                                {console.log(employee.nombre)}
                                <input className = "input-gral w-3" type="text" name="nombres" placeholder="Nombre(s)" defaultValue={employee.nombre}/>
                                <input className = "input-gral w-3" type="text" name="apellidom" placeholder="Apellido Materno" defaultValue={employee.apellidoPaterno}/>
                                <input className = "input-gral w-3" type="text" name="apellidop" placeholder="Apellido Paterno" defaultValue={employee.apellidoMaterno}/>
                                <input className = "input-gral w-2" type="tel" name="numtelefono" placeholder="Número de teléfono" defaultValue={employee.numTelefono}/>
                                <input className = "input-gral w-2" type="email" name="correo" placeholder="Correo electrónico" defaultValue={employee.correoElectronico}/>
                                
                                {SelectStatus === 'analista' ? <Select defaultValue = {options[0]} options={options} styles = {customSelectStyles}/> : null}
                                {SelectStatus === 'asesor' ? <Select defaultValue = {[options[0], options[2]]} options={options} isMulti styles = {customSelectStyles}/> : null}
                            </form>
                        </section>

                        <section className="botonesContentPage">
                            <CustomLink tag='button' to='./administrarUsuarios' className="botonAzulMarino">Cancelar</CustomLink>
                            <CustomLink tag='button' to='./administrarUsuarios' className="botonSalmon">Guardar cambios</CustomLink>
                        </section>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}
export default VentanaEditarUsuario;