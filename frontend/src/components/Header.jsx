import React from 'react'

function Header() {
  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        gap:"15px",
        background:"grey",
        minHeight:"8vh",
        alignItems:"center",
        fontSize:"20px",
    }}>
      <a href='/'>Home</a>
      <a href='/TrainDetailsPage'>TrainDetailsPage</a>
      <a href='#'>Updates</a>
      <a href='#'>Complains</a>
      <a href="#">About</a>
    </div>
  )
}

export default Header
