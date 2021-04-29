import React from "react";
import "./DropMenu.css"

function DropMenu(props){
    return(
        <div  className="menu">
            <select>
                <option default>{props.contenido}</option>
                <option value ="">Opción 1</option>
                <option value ="">Opción 2</option>
                <option value ="">Opción 3</option>
                <option value ="">Opción 4</option>
            </select>
            <i class="fas fa-caret-down triangle"></i>
        </div>
    )
}

export default DropMenu;