import './InputBuscar.css'

function InputBuscar(){
    return(
        <div class="cont-component">
            <div className="cont-input">
                <input type="search" className="input-search" placeholder="Buscar"/>
                <i class="fas fa-search"></i>
            </div>
        </div>
    )
}


export default InputBuscar;