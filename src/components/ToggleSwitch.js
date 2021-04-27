import './ToggleSwitch.css'

function ToggleSwitch(props){
    return(
        <div className="cont-component">
            <label className="switch">
                <input name={props.name} type="checkbox" checked={props.statusToggle1} onChange={props.setToggleTrue}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}


export default ToggleSwitch;