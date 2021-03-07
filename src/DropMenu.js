import React from "react";
import "./DropMenu.css"

function DropMenu(){
    return(
        <body>
            <div  className="menu">
                <select>
                    <option value ="">Perrito</option>
                    <option value ="">Gato</option>
                    <option value ="">sorro</option>
                    <option value ="">pez</option>
                </select>
                <i class="triangle"></i>
            </div>
        </body>
    )
}

export default DropMenu;