import React, { useState }  from 'react';
import './LandingAdminUsuarios.css';
import CustomLink from '../components/CustomLink';
import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import InputBuscar from '../components/InputBuscar';
import TablaProspectos from '../components/TablaProspectos';
import InputFiltrar from '../components/InputFiltrar';
import asesor from '../assets/asesor.png';
import ModalContactoAsesor from './ModalContactoAsesor'
import '../components/Boton.css'

function LandingAdminProspectos() {

    const [ visibility, setVisibility] = useState('hidden');
    const [ userId, setUserId ] = useState('1');

    let tabs = ["Administrar prospectos", "Agregar prospectos","Administrar clientes"];

    return(
        <main>
            <aside>
                <Lateral img = {asesor} usuario="Asesor #1234" tabs={tabs} />
            </aside>
            <section className='contentPage'>
                <header>
                    <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Administración de prospectos"/>
                </header>
                <section className="filtrosContentPageLanding">
                    <InputBuscar num={2} />
                    <InputFiltrar />
                </section>
                <section className="tablaContentPage">
                    <TablaProspectos visibility={visibility} setVisibility={setVisibility} userId={userId} setUserId={setUserId}/>
                    {visibility === 'visible' ? <ModalContactoAsesor visibility={visibility} setVisibility={setVisibility} userId={userId}/> : null}
                </section>
            </section>
        </main>
    );
}

export default LandingAdminProspectos;