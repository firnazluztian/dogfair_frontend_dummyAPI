import React from 'react'
import {Link} from 'react-router-dom'

function RegisterButton (props) {
    return (
        <Link to="/doggo-registration">
            <button className={'button ' + props.btnColor}>{props.btnName}</button>
        </Link>
    ) 
}

export default RegisterButton