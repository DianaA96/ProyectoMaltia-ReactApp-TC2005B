import React from 'react';
import './LandingAdminUsuarios.css'; //Toma estilos de Vista con mismas clases
import './AdministracionClientesAsesor.css'
import Lateral from '../Lateral';
import Bienvenida from '../components/Bienvenida';
import InputBuscar from '../InputBuscar';
import InputFiltrar from '../InputFiltrar';
import TablaAdminClientesAsesor from '../TablaAdminClientesAsesor';
import asesor from './assets/asesor.png';
import './Boton.css';


function AdministracionClientesAsesor() {

    let datosProspect = {
        data: [
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"}
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
                    <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Administración de clientes"/>
                </header>
                <section className="filtrosContentPageLanding">
                    <InputBuscar num={21} />
                    <InputFiltrar />
                </section>
                <section className="tablaContentPageAsesor">
                    <TablaAdminClientesAsesor {...datosProspect} />
                </section>
                <section className='semaforos'>
                    <div className='tarjetaSemaforo'>
                        <p className="semaforo"></p>
                        <p className="verde">Crédito autorizado</p>
                    </div>
                    <div className='tarjetaSemaforo'>
                        <p className="semaforoRojo"></p>
                        <p className="rojoEncendido">Crédito no autorizado</p>
                    </div>
                    <div className="tarjetaSemaforo">
                        <p className="semaforog"></p>
                        <p className="gris">Crédito no revisado</p>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default AdministracionClientesAsesor;