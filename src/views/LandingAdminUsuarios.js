import React, { useState }  from 'react';
import './LandingAdminUsuarios.css';
import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import InputBuscar from '../components/InputBuscar';
import TablaUsuarios from '../components/TablaUsuarios';
import InputFiltrar from '../components/InputFiltrar';
import ModalDeshabilitarEmpleado from './ModalDeshabilitarEmpleado'
import admin from '../assets/persona.svg';


const LandingAdminUsuarios = () => {
    
    const [status, setStatus] = useState('hidden');
    let tabs = ["Administrar Usuarios", "Agregar Usuario"];
    const [modalData, setModalData] = useState({});

    return(
        <main>
            <aside>
                 <Lateral img = {admin} usuario="Admin #1234" tabs={tabs}/>
            </aside>
            <section className='contentPage'>
                <header>
                    <Bienvenida txtBienvenida = "Bienvenido, Administrador" txtVentana="Administración de usuarios"/>
                </header>
                <section className="filtrosContentPageLanding">
                    <InputBuscar num={1} />
                    <InputFiltrar />
                </section>
                <section className="tablaContentPage">
                    <TablaUsuarios status={status} setStatus={setStatus} setModalData={setModalData}/>
                    {status === 'visible' ? <ModalDeshabilitarEmpleado modalData = {modalData} status = {status} setStatus = {setStatus}/> : null}
                </section> 
            </section>
        </main>
    );
}

export default LandingAdminUsuarios;