import React, { useState } from 'react'
import TrainCards from '../components/TrainCards';


const BusPage= () => {
    const[berth,setBerth]=useState("");
  return (
    <div>

     <div style={{backgroundColor:"grey",padding:"10px"}}>Navbar</div>

    
       
     <div style={{fontSize:"30px",display:"flex",justifyContent:"center"}}>Bus Complaint Registration</div>
     <h3>Report Issues instantly</h3>

     <div style={{display:"flex",justifyContent:"space-evenly",borderColor:"black",border:"solid 1px",padding:"10px", borderRadius:'5px'}}>
        <div style={{margin:"1px"}}>  
        <label>Bus Number</label> <br/>
        <input type="text" placeholder=""/>
        </div>
        <div>  
        <label>From</label>  <br/>
        <input type="text" placeholder=""/>
        </div>
         <div>  
        <label>To</label>  <br/>
        <input type="text" placeholder=""/>
        </div>
         <div>  
        <label>Date </label>  <br/>
        <input type="date" placeholder=""/>
        </div>
     </div>
   
    <div style={{display:"flex",justifyContent:"space-evenly",borderColor:"black",border:"solid 1px",padding:"10px", borderRadius:'5px',marginTop:"5px"}}>
    <div style={{margin:"1px"}}>  
      <label>Bus Operator</label> <br/>
      <select defaultValue="">
        <option value="" disbled>Select Bus Type</option>
        <option value="Government">Government</option>
        <option value="Public">Public</option>
      </select>
        </div>
        <div>  
        <label>Seat No.</label> <br/>
        <input type="text" placeholder=""/>
        </div>

      <div style={{margin:"1px"}}>  
      <label>Seat Type</label> <br/>
      <select defaultValue="">
        <option value="" disbled>Select Seat Type</option>
        <option value="Sleeper">Sleeper</option>
        <option value="Seater">Seater</option>
      </select>
        </div>
     </div>

     <div>
        <h2>Select your issue :</h2>
        <BusCards/>
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