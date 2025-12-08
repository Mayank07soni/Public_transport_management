import React from 'react'
import EntryBox from '../components/entryBox'

function Login() {
    const line =<p>Don't have account ? <a style={{color:"blue"}} href='signup'>SignUp</a></p>
  return (
    <div style={{display:"flex" , justifyContent:"center" ,alignItems:"center" ,height:"100vh"}}>
        
      <EntryBox tag={"Login"} line={line}/>
    </div>
  )
}

export default Login
