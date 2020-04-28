import React from 'react'
import './Cat.css';
import Owner from './Owner'
import Box from './Box'



export default function Cat(props){
    return (
        <div className={"cat-cage"}>
            <Box>
            <h2 className="cat-name">{props.name.toUpperCase()}</h2>
            </Box>
            <h3 className="cat-age">{props.age}</h3>
            
            <Owner name={props.owner} />
            <p>{props.name} {props.sleeping ? 'is sleeping' : 'is awake'}</p>
            {props.owner === 'Independent' && <p>please adopt me</p> }
        </div>
    )
}
