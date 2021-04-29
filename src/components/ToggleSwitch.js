import './ToggleSwitch.css'

function ToggleSwitch(props){
    return(
        <div className="cont-component">
            <label className="switch">
                <input name={props.name} type="checkbox" checked={props.checked} onChange={props.setStatusToggle1}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default ToggleSwitch;