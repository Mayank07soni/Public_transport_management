import React, { useState } from 'react'
import EntryBox from '../components/entryBox'
import OTPVarification from './Otp';

function SignUp() {
    const [compo, setCompo] = useState(false)
    const [otp, setOtp] = useState(null);
    const onClickFunction = async () => {
        const nums = Math.floor(Math.random() * 10000 + 1);
        setOtp(nums)
        const email = "karanyadav21398@gmail.com";
        const text = `Transport Manager OTP valid for 15 mins only: ${nums}. Don't share it with anyone.`;
        const subject = "OTP Verification";
        console.log(text)
        // try {

        //     const response = await fetch("http://localhost:3000/mail", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             email,
        //             text,
        //             subject,
        //         }),
        //     });

        //     const data = await response.json();
        //     console.log("OTP sent successfully:", data);

        // } catch (error) {
        //     console.log(error)
        // }
        setCompo(true);
    };
    const line = <p>Already have an account ? <a style={{ color: "blue" }} href='/login'>Login</a></p>
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
            <EntryBox tag={"SignUp"} line={line} onClickFunction={onClickFunction} />
            {compo && <OTPVarification nums={otp} />}
        </div>
    )
}

export default SignUp
