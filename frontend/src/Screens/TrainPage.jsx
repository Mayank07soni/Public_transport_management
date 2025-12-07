import React, { useState } from 'react'
import TrainCards from '../components/TrainCards';

const TrainPage = () => {
    const[berth,setBerth]=useState("");
  return (
    <div>

     <div style={{backgroundColor:"grey",padding:"10px"}}>Navbar</div>

    
       
     <div style={{fontSize:"30px",display:"flex",justifyContent:"center"}}>Train Complaint Registration</div>
     <h3>Report Issues instantly</h3>

     <div style={{display:"flex",justifyContent:"space-evenly",borderColor:"black",border:"solid 1px",padding:"10px", borderRadius:'5px'}}>
        <div style={{margin:"1px"}}>  
        <h3>Train Number</h3> 
        <input type="text" placeholder=""/>
        </div>
        <div>  
        <h3>Date of Complain</h3> 
        <input type="text" placeholder=""/>
        </div>
     </div>
   
    <div style={{display:"flex",justifyContent:"space-evenly",borderColor:"black",border:"solid 1px",padding:"10px", borderRadius:'5px',marginTop:"5px"}}>
        <div style={{margin:"1px"}}>  
      <label>Coach No.</label> <br/>
        <input type="text" placeholder=""/>
        </div>
        <div>  
        <label>Seat No.</label> <br/>
        <input type="text" placeholder=""/>

        </div>
           <div>  
        
          <div>
          <label>Berth Type: </label><br />
          <select value={berth} onChange={(e) => setBerth(e.target.value)}>
            <option value="">Select</option>
            <option>Lower Berth</option>
            <option>Middle Berth</option>
            <option>Upper Berth</option>
            <option>Side Lower</option>
            <option>Side Upper</option>
          </select>
        </div>
        </div>
     </div>

     <div>
        <h2>Select your issue :</h2>
        <TrainCards/>
     </div>

     <div style={{padding:"10px"}}>
      <input type="file" accept="image/*" style={{padding:"20px",margin:"10px"}} />
     </div>
     <div>
      <h3>Complain Description</h3>
      <textarea placeholder="Describe your Complaint...." rows={4} style={{width:"98%",margin:'10px'}}/>
     </div>


   </div>
  )
}

export default TrainPage