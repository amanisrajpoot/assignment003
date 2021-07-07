import React, { useState, useEffect } from 'react';
import User from "./User"
import './App.css';


function RandUsers(props){
    const styling = {
            
        fontSize: '18px',
        border: '1px solid black' // it is not work.
       
    }

    return(
        <div>
        <tr className="tableRow"
            key={props.key} >
            <td > {props.key}</td>
            <td style={styling}>Title</td>
            <td style={styling}>First Name</td>
            <td style={styling}>Last Name</td>
            <td style={styling}>Age</td>
            <td style={styling}>Gender</td>
            <td style={styling}>Email</td>
            <td style={styling}>Cell Number</td>
            <td style={styling}>City</td>
        </tr>

            {props.data.map((user, index)=> (<User
                data={user}
                key={index}  
                />))}     
        
        </div>
    )

}

export default RandUsers