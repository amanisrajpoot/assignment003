import React from "react"
import './App.css';


const User = (props) => {

    const styling = {
            
        fontSize: '18px',
        border: '1px solid black' // it is not work.
       
    }
    
    return (
        <tr className="tableRow"
            key={props.key} >
            <td > {props.key}</td>
            <td style={styling}>{props.data.name.title}</td>
            <td style={styling}>{props.data.name.first}</td>
            <td style={styling}>{props.data.name.last}</td>
            <td style={styling}>{props.data.dob.age}</td>
            <td style={styling}>{props.data.gender}</td>
            <td style={styling}>{props.data.email}</td>
            <td style={styling}>{props.data.cell}</td>
            <td style={styling}>{props.data.location.city}</td>
        </tr>
    )
}

export default User