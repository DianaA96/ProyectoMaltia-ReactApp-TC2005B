import './Checkbox.css'

function CheckBox(){
    return(
        <div className="cont-component">
            <label className="container-check">
                <input className="checkbox" type="checkbox"/>
                <span className="checkmark"></span>
            </label>
        </div>
    )
}


export default CheckBox;