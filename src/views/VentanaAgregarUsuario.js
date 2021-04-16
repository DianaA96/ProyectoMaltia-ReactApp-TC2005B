import React from 'react';
import Lateral from '../components/Lateral';
import CustomLink from '../components/CustomLink';
import Bienvenida from '../components/Bienvenida';
import RadioButton from '../components/RadioButton';
import './AgregarEditarUsuario.css';
import '../components/plantillaInputs.css';
import '../components/Boton.css';
import admin from '../assets/persona.svg';
import Select from 'react-select'


function VentanaAgregarUsuario() {
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
                    <section className="radiosContentPage">
                        <RadioButton etiqueta="Asesor" />
                        <RadioButton etiqueta="Analista"/>
                    </section>
                    <section className="inputsContentPage">
                        <form action="" className="inputsContentPage">
                            <input className = "input-gral w-3" type="text" name="nombres"  placeholder="Nombre(s)"/>
                            <input className = "input-gral w-3" type="text" name="apellidop"  placeholder="Apellido Paterno"/>
                            <input className = "input-gral w-3" type="text" name="apellidom" placeholder="Apellido Materno"/>
                            <input className = "input-gral w-2" type="tel" name="numtelefono"  placeholder="Número de teléfono"/>
                            <input className = "input-gral w-2" type="email" name="correo" placeholder="Correo electrónico"/>
                            <Select placeholder = {"Departamento"} options={options} styles = {customSelectStyles}/>
                            <Select placeholder = {"Tiendas"} options={options} isMulti styles = {customSelectStyles}/>
                        </form>
                    </section>

                    <section className="botonesContentPage">
                        <CustomLink tag='button' to='./administrarUsuarios' className="botonAzulMarino">Cancelar</CustomLink>
                        <CustomLink tag='button' to='./administrarUsuarios' className="botonSalmon">Registrar</CustomLink>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default VentanaAgregarUsuario;