import './Checkbox.css'

function CheckBox(props){
    return(
        <div className="cont-component">
            <label className="container-check">
                <input className="checkbox" type="checkbox" />
                <span className="checkmark" disabled = {props.isDisabled}></span>
            </label>
        </div>
    )
}


export default CheckBox;