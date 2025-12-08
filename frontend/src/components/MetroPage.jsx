import React, { useState } from 'react'
import MetroCards from './MetroCard';

const BusPage= () => {
    const[MetroLine, setMetroLine]=useState("");
  return (
    <div>

     <div style={{backgroundColor:"grey",padding:"10px"}}>Navbar</div>

    
       
     <div style={{fontSize:"30px",display:"flex",justifyContent:"center"}}>Metro Complaint Registration</div>
     <h3>Report Issues instantly</h3>

     <h4>Metro Details</h4>
     <div style={{display:"flex",justifyContent:"space-evenly",borderColor:"black",border:"solid 1px",padding:"10px", borderRadius:'5px'}}>
      
        <div style={{margin:"1px"}}>  
        <input type="text" placeholder="Type of Line"/>
        </div>
        <div>  
     
        <input type="text" placeholder="From"/>
        </div>
         <div>  
        
        <input type="text" placeholder="To"/>
        </div>
         <div>  
        <label>Date </label>  <br/>
        <input type="date" placeholder="01-01-2025"/>
        </div>
        <div>  
        <label>Time </label>  <br/>
        <input type="time" placeholder="00:00 "/>
        </div>
        
     </div>
   <h4>Coach / Platform Details</h4>
    <div style={{display:"flex",justifyContent:"space-evenly",borderColor:"black",border:"solid 1px",padding:"10px", borderRadius:'5px',marginTop:"5px"}}>
       <div>  
        <label>Coach No.</label> <br/>
        <input type="text" placeholder=""/>
        </div>
    <div style={{margin:"1px"}}>  
      <label>Gate NO.</label> <br/>
      <input type="number" placeholder=""/>
        </div>
        <div>  
        <label>Platform No.</label> <br/>
        <input type="text" placeholder=""/>
        </div>
     </div>

     <div>
        <h2>Select your issue :</h2>
        <MetroCards/>
     </div>

     <div style={{padding:"10px"}}>
      <input type="file" accept="image/*" style={{padding:"20px",margin:"10px"}} />
     </div>
     <div>
      <h3>Complain Description</h3>
      <textarea placeholder="Describe your Complaint...." rows={4} style={{width:"98%",margin:'10px'}}/>
     </div>
  <div>
    <input type="tel" placeholder="Enter the Number"/>
    <input type="email" placeholder="Enter the Email"/>
  </div>
  <div >
    <button style={{color:'white',backgroundColor:"blue",padding:"10px"}}>Submit</button>
    </div>

   </div>
  )
}

export default BusPage