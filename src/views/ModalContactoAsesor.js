import React, { useState, useEffect } from 'react';
import "./ModalContactoAsesor.css"
import Checkbox from '../components/Checkbox.js';
import '../components/Boton.css';
import Select from 'react-select'
import axios from 'axios'
import IdleStateView from '../components/IdleStateView';
import ErrorScreen from '../components/ErrorScreen'

function ModalContactoAsesor(props) {

    function hideModal() {
        props.setVisibility('hidden')
    }

    function setNumberCont(event){
        
        if(event.nativeEvent.path.[6].id === "one") {
            setContactNumber(1)
        }

        else if(event.nativeEvent.path.[6].id === "two") {
            setContactNumber(2)
        }

        else if(event.nativeEvent.path.[6].id === "three") {
            setContactNumber(3)
        }
    }

    function setContact(event) {
        console.dir(event)
        let newContact = {
            idProspect: props.userId,
            idContact: contactNumber,
            compromiso : event.value
        }
        console.log(newContact)
        setContactsDone(newContact)
        setOptionSelected(true)
    }

    function enviarDatosContacto(event) {
        event.preventDefault()
        setStatus('loading')
        let contacto = contactsDone
        console.log("Estoy haciendo contacto", contacto)
        axios({
            method: 'post',
            url: 'http://localhost:5000/contacts/',
            data: {
                body: {contacto},
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }
        })
        props.setVisibility('hidden')
    }

    function setCheckTrue() {
        setCheckboxChecked(!checkboxChecked)
    }
 
    const [ contactsDone, setContactsDone ] = useState([])
    const [ status, setStatus ] = useState('idle')
    const [ error, setError ] = useState(null)
    const [ prospectInfo, setProspectInfo ] = useState([])
    const [ contactInfo, setContactInfo ] = useState([])
    const [ contactNumber, setContactNumber ] = useState(0)
    const [ checkboxChecked, setCheckboxChecked] = useState(false)
    const [ optionSelected, setOptionSelected] = useState(false)

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/prospects/${props.userId}/contacts`) 
            .then((result)=>{
            setProspectInfo(result.data.prospect)
            setContactInfo(result.data.datosContactos)
            setStatus('resolved')
            })
            .catch((err)=>{
                setError(err)
                setStatus('error')
            })
    }, [])
    
    // Estilos del select
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
                <button className="closingModalButton" onClick={hideModal}>x</button>
                {status === 'loading'|| status === 'idle'? <p><IdleStateView/></p>:
                status === 'resolved'? 
                <React.Fragment>
                    <h2 className="nombreUsuario"> {prospectInfo.nombre} {prospectInfo.apellidoPaterno} {prospectInfo.apellidoMaterno}</h2>
                        <div className="infoPrimaria">
                            <i class="fas fa-phone-alt"> </i>
                            <p className="tel"> {prospectInfo.numTelefono} </p>
                        </div>

                        <form className="formulario">
                            
                            <p className="mobile-contactNum">Contacto 1</p>
                            <div className="cont-contacto" id="one">
                                <div className="contacto-left">
                                    <p>Contacto 1 </p>
                                    <Checkbox 
                                        isDefaultChecked={contactInfo.[0]?true:null}
                                        isDisabled={contactInfo.[0]?true:null}
                                        setCheckTrue={setCheckTrue}
                                    /> 
                                </div>
                                <Select 
                                    isDisabled={contactInfo.[0]?true:false} 
                                    placeholder = {contactInfo.[0]?contactInfo.[0].compromiso:"Compromiso"} 
                                    options={options} 
                                    styles = {customSelectStyles}
                                    onChange={setContact}
                                    onFocus={setNumberCont}
                                />
                            </div>

                            <p className="mobile-contactNum">Contacto 2</p>
                            <div className="cont-contacto" id="two">
                                <div className="contacto-left">
                                    <p>Contacto 2</p>
                                    <Checkbox
                                        isDefaultChecked={contactInfo.[1]?true:null} 
                                        isDisabled={contactInfo.[1]||(!contactInfo.[0])?true:null}
                                        setCheckTrue={setCheckTrue}
                                    />  
                                </div>
                                <Select  
                                    isDisabled={contactInfo.[1]||(!contactInfo.[0])?true:false} 
                                    placeholder = {contactInfo.[1]?contactInfo.[1].compromiso:"Compromiso"} 
                                    options={options} 
                                    styles = {customSelectStyles}
                                    onChange={setContact}
                                    onFocus={setNumberCont}
                                /> 
                            </div>

                            <p className="mobile-contactNum">Contacto 3</p>
                            <div className="cont-contacto" id="three">
                                <div className="contacto-left">
                                    <p>Contacto 3</p>
                                    <Checkbox 
                                        isDefaultChecked={contactInfo.[2]?true:null}
                                        isDisabled={contactInfo.[2]||(!contactInfo.[0])||(!contactInfo.[1])?true:null}
                                        setCheckTrue={setCheckTrue}
                                    /> 
                                </div>
                                <Select  
                                    isDisabled={contactInfo.[2]||(!contactInfo.[0])||(!contactInfo.[1])?true:false} 
                                    placeholder = {contactInfo.[2]?contactInfo.[2].compromiso:"Compromiso"} 
                                    options={options} 
                                    styles = {customSelectStyles}
                                    onChange={setContact}
                                    onFocus={setNumberCont}
                                />
                            </div>
                        
                            <button
                                tag='button' 
                                disabled={checkboxChecked&&optionSelected?false:true}
                                onClick={enviarDatosContacto} 
                                className="botonSalmon">
                                Guardar cambios
                            </button>
                        </form>
                </React.Fragment>: status === 'error'? <ErrorScreen/>:
            null}
        </div>
    </div>
    );    
}

export default ModalContactoAsesor;