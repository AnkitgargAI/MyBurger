import React from 'react';
import "./BackDrop.css"
const Backdrop = (props)=>{

    return props.show?<div className="BackDrop" onClick={props.clicked}></div>:null;
}
export default Backdrop;