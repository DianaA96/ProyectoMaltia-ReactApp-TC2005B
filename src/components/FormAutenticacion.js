import React, { useState, useContext } from 'react';
import './FormAutenticacion.css';
import CustomLink from './CustomLink';
import { AuthContext } from '../auth-context'

function FormAutenticacion() {
    const [ usuarioAuth, setUsuarioAuth ] = useState({});
    const [ formState, setFormState ] = useState('pristine');
    const { login } = useContext(AuthContext);

    function handleChange(event) {
        let usuarioCambia = {
            ...usuarioAuth,
            [event.target.name]: event.target.value
        }
        setUsuarioAuth(usuarioCambia)
        setFormState('dirty')
    }

    function handleLogin(event){
        event.preventDefault();
        login(usuarioAuth)
    }

    return (
        <form className="contenedor" onSubmit={handleLogin}>
            <h2 className="titulo">Inicia sesión</h2>
            <input onChange={handleChange} type="text" name="correoElectronico" placeholder="Usuario" id="inputUsuario" className="inputUsuario"/>
            <input onChange={handleChange} type="password" name="contrasena" placeholder="Contraseña" id="inputContrasena" className="inputContrasena"/>
            <CustomLink onClick={handleLogin} type="submit" tag='button' to='./' className="contenedor"> Entrar </CustomLink>
        </form>
    )
}

export default FormAutenticacion