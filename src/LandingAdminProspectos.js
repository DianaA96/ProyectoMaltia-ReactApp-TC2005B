import React from 'react';
import './LandingAdminProspectos.css';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import InputBuscar from './InputBuscar';
import TablaProspectos from './TablaProspectos';
<<<<<<< HEAD
import asesor from './img/asesor.png';
import './Boton.css'
=======

>>>>>>> 39cbadbddbde07215ac4df41cd6d91c9acf54d47

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
                    <InputBuscar />
                    <InputBuscar />
                </section>
                <section className="tablaProspectos">
                    <TablaProspectos {...datosProspect} />
                </section>
            </section>
        </main>
        
    );
}

export default LandingAdminProspectos;