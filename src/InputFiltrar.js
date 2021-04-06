import './InputFiltrar.css'

function InputFiltrar(){
    return(
        <div className="filterInput">
            <input id="searchFilter" type="text" placeholder="Escribe para filtrar"/>
            <button className="buttonInputSearch"><i class="fas fa-filter"></i></button>
            <ul className="dropFilter"></ul>
        </div>
    );
}

export default InputFiltrar;