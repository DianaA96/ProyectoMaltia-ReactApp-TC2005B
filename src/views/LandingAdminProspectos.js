import React, { useState, useEffect }  from 'react';
import './LandingAdminUsuarios.css';
import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import InputBuscar from '../components/InputBuscar';
import TablaProspectos from '../components/TablaProspectos';
import InputFiltrar from '../components/InputFiltrar';
import asesor from '../assets/asesor.png';
import ModalContactoAsesor from './ModalContactoAsesor'
import '../components/Boton.css';

function LandingAdminProspectos() {

    const [ visibility, setVisibility] = useState('hidden');
    const [ userId, setUserId ] = useState('1');
    const [ queryInput, setQueryInput ] = useState('');

    let tabs = ["Administrar prospectos", "Agregar prospectos","Administrar clientes"];
    const [TabFocus, setTabFocus] = useState(0);

    return(
        <main>
            <aside>
                <Lateral 
                    img = {asesor} 
                    tabs={tabs} 
                    TabFocus={TabFocus} 
                    usuario={`http://localhost:5000/employees/assessor?thisAssessor=zorro5`} 
                    setTabFocus={setTabFocus}/>
            </aside>
            <section className='contentPage'>
                <header>
                    <Bienvenida 
                        txtBienvenida = "Bienvenido, Asesor" 
                        txtVentana="Administración de prospectos"/>
                </header>
                <section className="filtrosContentPageLanding">
                    <InputBuscar setQueryInput={setQueryInput}/>
                    <InputFiltrar />
                </section>
                <section className="tablaContentPage">
                    <TablaProspectos 
                        queryInput={queryInput} 
                        visibility={visibility} 
                        setVisibility={setVisibility} 
                        userId={userId} 
                        setUserId={setUserId}/>
                    {visibility === 'visible' ? 
                    <ModalContactoAsesor 
                        visibility={visibility} 
                        setVisibility={setVisibility} 
                        userId={userId}/> : null}
                </section>
            </section>
        </main>
    );
}

export default LandingAdminProspectos;