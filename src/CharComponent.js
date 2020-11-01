import React from 'react';


const CharComponent = ({ props }) => {
    console.log(props);
    return (

        <div style={{
            "display": "inline-block", "padding": "16px", "text-align": "center", "margin": "16px", "border": "1px solid black"
        }}>
            {props}
        </div>
    );
}


export default CharComponent