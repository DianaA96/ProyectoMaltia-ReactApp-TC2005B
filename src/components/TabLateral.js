import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom';

function TabLateral(props) {

    function changeFocus(){
        props.setTabFocus(true)
    }
    return (
        <Link to={`/${props.name.replace(/ /g, "")}`}>
            <div className={`${props.idx === props.TabFocus ? "tab-foc" : "tab"}`} onFocus={changeFocus}>
                {props.name ? props.name.split(" ")[0] : null}
                <br />
                {props.name.split(" ")[1] ? props.name.split(" ")[1] : null}
            </div>
        </Link>
    )
}

export default TabLateral
