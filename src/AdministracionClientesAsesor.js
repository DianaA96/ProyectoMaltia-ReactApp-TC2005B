import React from 'react';
import './LandingAdminUsuarios.css';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import InputBuscar from './InputBuscar';
import InputFiltrar from './InputFiltrar';
import TablaClientes from './TablaClientes';
import asesor from './img/asesor.png';
import './Boton.css';


function AdministracionClientesAsesor() {

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

    let tabs = ["Administrar prospectos", "Agregar prospectos", "Administrar clientes"];

    return(
        <main>
            <aside>
                <Lateral img = {asesor} usuario="Asesor #1234" tabs={tabs}/>
            </aside>
            <section className='contentPage'>
                <header>
                    <Bienvenida txtbienvenida = "Bienvenido, Asesor" txtventana="Administración de clientes"/>
                </header>
                <section className="filtrosContentPageLanding">
                    <InputBuscar />
                    <InputFiltrar />
                </section>
                <section className="tablaContentPage">
                    <TablaClientes {...datosProspect} />
                </section>
            </section>
        </main>
    );
}

export default AdministracionClientesAsesor;