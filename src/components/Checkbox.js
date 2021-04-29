import './Checkbox.css'

function CheckBox(props){ 
    return(
        <div className="cont-component">
            <label className="container-check">
                <input 
                    className="checkbox" 
                    type="checkbox" 
                    checked={props.isDefaultChecked} 
                    disabled={props.isDisabled} 
                    onChange={props.setCheckTrue}/>
                <span className="checkmark" ></span>
            </label>
        </div>
    )
}

export default CheckBox;