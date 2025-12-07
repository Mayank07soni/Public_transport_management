import React,{useState} from 'react'
import TransportCard from './TransportCard'
const MainPage = () => {
  return (
  <div>
   
    <div style={{ fontSize: "32px",fontWeight: "600",textAlign: "center",}}>
      MainPage
      </div>

    <div style={{fontSize:"20px",backgroundColor:"lightblue",padding:"10px"}}>
      Navbar
      </div>

    <div style={{marginTop:"40px",backgroundColor:"grey",height:"250px",margin:"20px", position:"relative"}}>

       <img src="https://th.bing.com/th/id/OIP.QVBY30VqTi-tlYt_BaoGqAHaEo?w=260&h=181&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1" 
       alt="Image" 
       style={{ width: "100%", height: "100%", objectFit: "cover" }}/>

      <div>
      <input type="text" placeholder="Search..."  
      style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "8px 12px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      }}/>
     </div>

   </div>
  
<TransportCard/>
<div style={{display:"flex",justifyContent:"center"}}>
  <button  onClick={() => alert("Button Clicked ")} style={{color:"white",backgroundColor:"blue",borderRadius:"5px",padding: "10px 24px",margin:"30px"}}>More</button>
</div>
  </div>

  )
}

export default MainPage