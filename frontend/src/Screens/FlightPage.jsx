import React, { useState } from 'react'
import FlightCards from '../components/FlightCards';

const FlightPage= () => {
    const[airline,setAirline]=useState("");
  return (
    <div>

     <div style={{backgroundColor:"grey",padding:"10px"}}>Navbar</div>

    
       
     <div style={{fontSize:"30px",display:"flex",justifyContent:"center"}}>Flight Complaint Registration</div>
     <h3>Report Issues instantly</h3>

     <div style={{display:"flex",justifyContent:"space-evenly",borderColor:"black",border:"solid 1px",padding:"10px", borderRadius:'5px'}}>
        <div style={{margin:"1px"}}>  
        <label>Airline Name</label> <br/>
        <select value ={airline} onChange={(e)=>setAirline(e.target.value)}>
          <option value="" disabled>Select Airline</option>
          <option>Air India</option>
          <option>Vistara</option>
          <option>Indigo</option>
          <option>SpiceJet</option>
        </select>

        </div>
        <div>  
        <label>Departure Airport</label>  <br/>
        <input type="text" placeholder=""/>
        </div>
         <div>  
        <label>Arrival</label>  <br/>
        <input type="text" placeholder=""/>
        </div>
         <div>  
        <label>Date </label>  <br/>
        <input type="text" placeholder=""/>
        </div>
         <div>  
        <label>Depature Time </label>  <br/>
        <input type="time" placeholder=""/>
        </div>
     </div>
   <h4>Passenger Seat Details</h4>
    <div style={{display:"flex",justifyContent:"space-evenly",borderColor:"black",border:"solid 1px",padding:"10px", borderRadius:'5px',marginTop:"5px"}}>
    <div style={{margin:"1px"}}>  
      <label>Cabin Class</label> <br/>
      <select defaultValue="">
        <option value="" disbled>Select Class</option>
        <option value="Economy">Economy</option>
        <option value="Premium Economy">Premium Economy</option>
        <option value="Buisness">Buisness</option>
      </select>
        </div>
        <div>  
        <label>Seat No.</label> <br/>
        <input type="text" placeholder=""/>
        </div>
     </div>

     <div>
        <h2>Select your issue :</h2>
        <FlightCards/>
     </div>

     <div style={{padding:"10px"}}>
      <input type="file" accept="image/*" style={{padding:"20px",margin:"10px"}} />
     </div>
     <div>
      <h3>Complain Description</h3>
      <textarea placeholder="Describe your Complaint...." rows={4} style={{width:"98%",margin:'10px'}}/>
     </div>
  <div>
    <input type="text" placeholder="Enter the Name" style={{borderColor:"black", color:"grey"}}/>
    <input type="tel" placeholder="Enter the Number"/>
    <input type="email" placeholder="Enter the Email"/>
  </div>
  <div >
    <button style={{color:'white',backgroundColor:"blue",padding:"10px"}}>Submit</button></div>

   </div>
  )
}

export default FlightPage