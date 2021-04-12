import React from 'react';
import Lateral from './Lateral';
import CustomLink from'./CustomLink';
import Bienvenida from './Bienvenida';
import RadioButton from './RadioButton';
import DropMenu from './DropMenu'
import './AgregarEditarUsuario.css';
import './plantillaInputs.css'
import './Boton.css'
import admin from './assets/persona.svg';
import Select from 'react-select'

function VentanaEditarUsuario() {
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
            width:"44.5%" 
          })
    }
    return(
        <React.Fragment>
            <main>
                <aside>
                    <Lateral img = {admin} usuario="Admin #1234" tabs={tabs} />
                </aside>
                <section className='contentPageFormsUsuario'>
                    <header>
                        <Bienvenida txtBienvenida = "Bienvenido, Administrador" txtVentana="Editar usuario"/>
                    </header>
                    <section className="radiosContentPage">
                        <RadioButton etiqueta="Asesor" />
                        <RadioButton etiqueta="Analista"/>
                    </section>
                    <section className="inputsContentPage">
                        <form action="" className="inputsContentPage">
                            <input className = "input-gral w-3" type="text" name="nombres" placeholder="Nombre(s)" defaultValue="Harry José"/>
                            <input className = "input-gral w-3" type="text" name="apellidom" placeholder="Apellido Materno" defaultValue="Potter"/>
                            <input className = "input-gral w-3" type="text" name="apellidop" placeholder="Apellido Paterno" defaultValue="Hernández"/>
                            <input className = "input-gral w-2" type="tel" name="numtelefono" placeholder="Número de teléfono" defaultValue="771 212 23 32"/>
                            <input className = "input-gral w-2" type="email" name="correo" placeholder="Correo electrónico" defaultValue="email@hogwarts.edu"/>
                            <Select defaultValue = {options[0]} options={options} styles = {customSelectStyles}/>
                            <Select defaultValue = {[options[0], options[2]]} options={options} isMulti styles = {customSelectStyles}/>
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

export default VentanaEditarUsuario;