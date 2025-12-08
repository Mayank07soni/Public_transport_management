import React from 'react'
import Button from './Button'

function Footer() {
  return (
    <div style={{height:"45vh",
        background:"grey",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        borderTopLeftRadius:"0.75rem",
        borderTopRightRadius:"0.75rem"
    }}>
        <div className='input' style={{
            display:"flex",
            flexDirection:"column",
            gap:"5px",
            width:"100%",
            padding:"10px",
            minHeight:"40%"
        }} >
                <input type="text" style={{borderRadius:"0.6rem" ,minHeight:"25%",padding:"2px"}} />
                <textarea name="tell something" id="" style={{borderRadius:"0.6rem" ,padding:"2px" }}/>
                <Button innerText="Submit" />
        </div>
        <div>
            <p>
                Made with &#10084;
            </p>
        </div>
    </div>
  )
}

export default Footer
