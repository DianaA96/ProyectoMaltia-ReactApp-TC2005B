import React from 'react';
import './LandingAdminProspectos.css';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import InputBuscar from './InputBuscar';
import InputFiltrar from './InputFiltrar';
import TablaProspectos from './TablaProspectos';
import asesor from './img/asesor.png';
import './Boton.css'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom';

function LandingAdminProspectos() {

    let datosProspect = {
        data: [
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
        ]
      };

    let tabs = ["Administrar prospectos", "Agregar prospectos","Administrar clientes"];
    let enlaces = ["./", "./nuevo-usuario"];
    
    return(
        <main>
            <aside>
                <Lateral img = {asesor} usuario="Asesor #1234" tabs={tabs} enlaces={enlaces} />
            </aside>
            <section className='contenido'>
                <header>
                    <Bienvenida txtbienvenida = "Bienvenido, Asesor" txtventana="Administración de prospectos"/>
                </header>
                <section className="filtros">
                    <Link to='/user-not-found'><InputBuscar /></Link>
                    <InputFiltrar />
                </section>
                <section className="tablaProspectos">
                    <TablaProspectos {...datosProspect} />
                </section>
            </section>
        </main>
        
    );
}

export default LandingAdminProspectos;