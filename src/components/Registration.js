import "../assets/css/style.css"
import React from 'react'
import { Link } from 'react-router-dom'



const Registration =()=> {
  return (
    <>
    <div className='register-form'>
    <form action=''>
      <h1>Registration</h1>
      <div>
      <div>
        <input type='text' name='username' id='username'placeholder='Enter Username'/>
      </div>
      <div>
        <input type='text' name='email' id='email' placeholder='Enter Email'/>
      </div>
      <div>
         <input type='text' name='phone' id='phone' placeholder='Enter Phone Number'/>
      </div>
      <div>
        <input type='text' name='password' id='password' placeholder='Enter Strong Password'/>
      </div>
      <button type='submit'> Submit</button>
      <p>Already Registered?
        <Link to="/Login"> Login here</Link>
      </p>
      </div>
    </form>
    </div>
    </>
  )
}

export default Registration