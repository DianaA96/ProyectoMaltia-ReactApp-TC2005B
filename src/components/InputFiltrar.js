import './InputFiltrar.css'

function InputFiltrar(){
    return(
        <div className="filterInput">
            <input className="input-search" type="search" placeholder="Escribe para filtrar"/>
            <button className="buttonInputSearch"><i class="fas fa-filter"></i></button>
            <ul className="dropFilter"></ul>
        </div>
    );
}

export default InputFiltrar;