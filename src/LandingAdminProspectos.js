import React from 'react';
import './LandingAdminProspectos.css';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import InputBuscar from './InputBuscar';
import TablaProspectos from './TablaProspectos';


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

    let tabs = ["Administrar Usuarios", "Agregar Usuario"];
    let enlaces = ["./", "./nuevo-usuario"];
    
    return(
        <main>
            <aside>
                <Lateral img = {admin} usuario="Admin #1234" tabs={tabs} enlaces={enlaces} />
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