import React from 'react'

function EntryBox(props) {
    const tag = props.tag;
    const line = props.line;
    const onClickFunction = props.onClickFunction;
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "white",
            gap: "10px",
            borderColor: "black",
            boxShadow: "initial",
            padding: "20px",
            borderWidth: "3px",
            borderRadius: "0.75rem",
            minWidth: "31vw",
            height: "35vh"
        }}>
            <input placeholder='Email' type='email' style={{ padding: "10px", borderRadius: "0.75rem", height: "20%", width: "90%", borderWidth: "2px", borderColor: "black" }}></input>
            <input placeholder='Password' type='password' style={{ padding: "10px", borderRadius: "0.75rem", height: "20%", width: "90%", borderWidth: "2px", borderColor: "black" }}></input>
            <button style={{ background: "purple", padding: "10px", borderRadius: "0.75rem" }} onClick={onClickFunction}>{tag}</button>
            {line}
        </div>
    )
}

export default EntryBox
