import React from 'react';
import './LandingAdminUsuarios.css';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import InputBuscar from './InputBuscar';
import TablaClientes from './TablaClientes';
import  analista from './img/analista.png';
import './Boton.css';


function LandingAnalista() {

    let datosProspect = {
        data: [
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Dispuesto"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Dispuesto"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"}
        ]
      };

    let tabs = ["Solicitudes", "Generar reportes"];
    let enlaces = ["./", "./nuevo-usuario"];

    return(
        <main>
            <aside>
                <Lateral img = {analista} usuario="Analista #1234" tabs={tabs} enlaces={enlaces}/>
            </aside>
            <section className='contentPage'>
                <header>
                    <Bienvenida txtbienvenida = "Bienvenido, analista" txtventana="Administración de clientes"/>
                </header>
                <section className="filtrosContentPageLanding">
                    <InputBuscar />
                    <InputBuscar />
                </section>
                <section className="tablaContentPage">
                    <TablaClientes {...datosProspect} />
                </section>
            </section>
        </main>
        
    );
}

export default LandingAnalista;