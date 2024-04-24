import '../style/style.css'
import React, { useState } from 'react';
var otp1 = "";
function Otp() {
    const [otp, setOtp] = useState("");

    const sendOTP = () => {
        
        for (let i = 0; i < 6; i++) {
            otp1 += Math.floor(Math.random() * 10);
        }
        setOtp(otp1);
        console.log(otp1);
    }

    const verifyOTP=()=>{
        let otp2 = document.getElementById("otp_input").value;
        if(otp1 == otp2)
        {
            alert("Your Email has been verified successfully");  
        }
        else(alert("Incorrect OTP"));
    }

    return (
        <div className='OTP-container'>
            <div className='otpForm'>
                <h1>Email Verification</h1>
                <input type='email' id='email' placeholder='Enter Email' />
                <button className='btn' onClick={sendOTP}>Send OTP</button>
                <div className='otpverify'>
                    <input type='text' id="otp_input" placeholder='Enter OTP' />
                    <button className='btn' id='otp-btn' onClick={verifyOTP}>Verify</button>
                </div>
                

                <div>{otp}</div>
            </div>
        </div>
    )
}

export default Otp;
