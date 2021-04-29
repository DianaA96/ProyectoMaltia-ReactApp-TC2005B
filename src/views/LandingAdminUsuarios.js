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
    const [ queryInput, setQueryInput ] = useState('')
    const [modalData, setModalData] = useState({});
    const [TabFocus, setTabFocus] = useState(0);
    
    return(
        <main>
            <aside>
                 <Lateral 
                    img = {admin} 
                    usuario={`http://localhost:5000/employees/assessor?thisAssessor=zorro32`} 
                    tabs={tabs} 
                    setTabFocus={setTabFocus} 
                    TabFocus={TabFocus}
                />
            </aside>
            <section className='contentPage'>
                <header>
                    <Bienvenida txtBienvenida = "Bienvenido, Administrador" txtVentana="Administración de usuarios"/>
                </header>
                <section className="filtrosContentPageLanding">
                    <InputBuscar setQueryInput={setQueryInput}/>
                    <InputFiltrar />
                </section>
                <section className="tablaContentPage">
                    <TablaUsuarios 
                        queryInput={queryInput} 
                        status={status} 
                        setStatus={setStatus} 
                        setModalData={setModalData}
                    />
                    {status === 'visible' ? 
                    <ModalDeshabilitarEmpleado 
                        modalData = {modalData} 
                        status = {status} 
                        setStatus = {setStatus}/> : null}
                </section> 
            </section>
        </main>
    );
}

export default LandingAdminUsuarios;