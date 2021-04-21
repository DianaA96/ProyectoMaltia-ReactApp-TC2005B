import './ToggleSwitch.css'

function ToggleSwitch(){
    return(
        <div className="cont-component">
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}


export default ToggleSwitch;