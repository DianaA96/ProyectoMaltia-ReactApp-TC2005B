import './InputFiltrar.css'

function InputFiltrar(){
    return(
        <div className="filterInput">
            <input id="searchFilter" type="text" placeholder="Escribe para filtrar"/>
            <i class="fas fa-filter"></i>
            <ul className="dropFilter"></ul>
        </div>
    );
}

export default InputFiltrar;