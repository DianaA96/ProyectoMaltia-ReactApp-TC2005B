import React, { useState, useContext } from 'react'
import axios from 'axios';

export const AuthContext = React.createContext({});

export function AuthProvider({ children }) {

    const [ user, setUser ] = useState(null);
    const [ status, setStatus ] = useState('idle')
    const [ error, setError ] = useState(null)

    function login({ correoElectronico, contrasena }) {
        console.log("haciendo login")
        axios( {
            url: 'http://localhost:5000/employees/login',
            method: 'post',
            data: {
                body: {
                    correoElectronico,
                    contrasena,
                },
                headers: {
                    'Content-type': 'application/json'
                }
            }
        })
        .then((result) => {
            console.log("result de api", result)
            window.localStorage.setItem('gn3ivluxXGi0CNE', result.data.data)
            setUser(result.data.data);
            console.log("usuario", user.data)
        })
        .catch((err)=>{
            console.error('Credenciales inválidas')
            setError('error')
            //setStatus('error')
        })
    }

    function logout() {
        console.log("estoy haciendo logout")
        setUser(null);
        console.log(user)
        window.localStorage.removeItem('gn3ivluxXGi0CNE')
    }

    function register(userData) {
        axios({
            url: 'http://localhost:5000/employees/signup',
            method: 'post',
            data: {
                body: userData,
                headers: {
                    'Content-type': 'application/json'
                }
            } 
        })
        .then((result) => {
            console.log("resultado de api, register", result);
            window.localStorage.setItem('gn3ivluxXGi0CNE', result.token)
            setUser(result);
        })
        .catch((err) => {
            console.error("Credenciales inválidas")
            setError('error')
        })
    }

    function getToken() {
        return window.localStorage.getItem('gn3ivluxXGi0CNE')
    }

    const value = {
        user,
        getToken,
        login,
        logout,
        register,
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth solo puede ser utilizado dentro de AuthProvider')
    }
    return context;
}

export default AuthContext;

// import AuthContext, { useAuth, AuthProvider} from './auth-context.js'