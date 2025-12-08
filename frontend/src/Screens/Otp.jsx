import React from 'react';
import { useNavigate } from 'react-router-dom';

function OTPVarification(props) {
    const nums = props.nums;
    const navigate = useNavigate();
    console.log(nums)
    const validate = () => {
        const input = document.getElementById("OTPInput").value;

        if (Number(input) === Number(nums)) {
            navigate('/');
        } else {
            alert("Wrong OTP!");
        }
    };

    return (
        <div style={{ margin: "10px", padding: "10px", borderWidth: "3px", borderRadius: "0.75rem" }}>
            {/* {nums} */}
            <input placeholder='Enter OTP' type="text" id="OTPInput" style={{ padding: "2px", height: "90%", borderRadius: "0.75rem", outline: "none", }} />
            <button onClick={validate} style={{ background: "green", borderRadius: "0.75rem", paddingLeft: "5px", paddingBottom: "2px", paddingRight: "5px" }} >Submit</button>
        </div>
    );
}

export default OTPVarification;
