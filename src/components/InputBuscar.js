import './InputBuscar.css';
import { useState } from 'react';

function InputBuscar(props){
    
    const [ querying, setQuerying ] = useState('');

    function handleChange(event) {
        setQuerying(event.target.value)
    }

    function handleQuery(event) {
        event.preventDefault();
        props.setQueryInput(querying)
    }

    return(
        <div className="cont-component">
            <div className="cont-input">
                <form onSubmit={handleQuery}>
                <input 
                    type="search" 
                    className="input-search" 
                    placeholder="Buscar"
                    onChange={handleChange}/>
                    <button 
                        type= 'submit' 
                        className="buttonInputSearch"
                        onClick={handleQuery}><i class="fas fa-search"></i></button>
                </form>
            </div>
        </div>
    )
}

export default InputBuscar;