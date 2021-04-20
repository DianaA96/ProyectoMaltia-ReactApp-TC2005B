import React from 'react';
import "./ModalContactoAsesor.css"
import Checkbox from '../components/Checkbox.js';
import '../components/Boton.css';
import DropMenu from '../components/DropMenu.js';
import Select from 'react-select'

function ModalContactoAsesor(props){

    function hideModal(){
        props.setStatus('hidden')
    }

    const options = [
        { value: 'No atiende', label: 'No atiende' },
        { value: 'No está interesado', label: 'No está interesado' },
        { value: 'Número equivocado', label: 'Número equivocado' },
        { value: 'Tomando una decisión', label: 'Tomando una decisión' },
        { value: 'Inicia solicitud', label: 'Inicia solicitud' },
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
                fontSize: "5vw",
                padding: "5px 20px",
            },
        }),
              menu: base => ({
                ...base,
                borderRadius: "25px",
                fontSize: "22px",
                fontFamily: "Raleway",
                "@media only screen and (max-width: 576px)": {
                    ...base["@media only screen and (max-width: 576px)"],
                    fontSize:"6vw",
                },
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
                width:"60%",
                "@media only screen and (max-width: 576px)": {
                    ...base["@media only screen and (max-width: 576px)"],
                    width:"90%",
                },
              })
        }

    return(
        <div className="modalPadre1">
            <div className="modal">
                <h2 className="nombreUsuario"> Harry José Potter Hernandez </h2>
                <div className="infoPrimaria">
                    <i class="fas fa-phone-alt"> </i>
                    <p className="tel">  771 245 2723 </p>
                </div>
                <div className="formulario">
                    <p className="mobile-contactNum">Contacto 1</p>
                    <div className="cont-contacto">
                        <div className="contacto-left">
                            <p>Contacto 1 </p>
                            <Checkbox /> 
                        </div>
                        <Select placeholder = {"Compromiso"} options={options} styles = {customSelectStyles}/>
                    </div>

                    <p className="mobile-contactNum">Contacto 2</p>
                    <div className="cont-contacto">
                        <div className="contacto-left">
                            <p>Contacto 2</p>
                            <Checkbox/>  
                        </div>
                        <Select placeholder = {"Compromiso"} options={options} styles = {customSelectStyles}/> 
                    </div>

                    <p className="mobile-contactNum">Contacto 3</p>
                    <div className="cont-contacto">
                        <div className="contacto-left">
                            <p>Contacto 3</p>
                            <Checkbox/> 
                        </div>
                        <Select placeholder = {"Compromiso"} options={options} styles = {customSelectStyles}/>
                    </div>
                </div>
                <button tag='button' onClick={hideModal} className="botonSalmon">Guardar cambios</button>
            </div>
        </div>
        
    );
}

export default ModalContactoAsesor;