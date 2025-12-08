import React from 'react'

function Button(props) {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <button  style={{ color: "white", backgroundColor: "blue", borderRadius: "5px", padding: "10px 24px", margin: "30px" }}>{props.innerText}</button>
        </div>
    )
}

export default Button
