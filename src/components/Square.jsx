import React from 'react'
export default function Square(prop){
    return(
        
        <div 
            onClick={prop.onClick}
            style={{
                border : "1px solid", 
                height: "100px",
                width: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems : "center",
            }} className="square">
            <h5>{prop.value}</h5>
        </div>
    );
}