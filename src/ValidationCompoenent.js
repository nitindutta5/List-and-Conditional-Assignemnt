import React from 'react';


const ValidationComponent = ({ props }) => {
    return (
        <p>
            {(props < 5) ? "Text Too Short" : "Text is long enough"}
        </p>
    );
}


export default ValidationComponent;