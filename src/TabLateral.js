import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom';

function TabLateral(props) {
    return (
         <Link to={props.name.replace(/ /g, "")}>
            <div>
                <a id="tab" href=""> 
                    <div className='tab'>
                        {props.name ? props.name.split(" ")[0] : null}
                        <br />
                        {props.name.split(" ")[1] ? props.name.split(" ")[1] : null}
                    </div>
                </a>
            </div>
        </Link>
    )
}

export default TabLateral
